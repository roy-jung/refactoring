import Producer from './producer.js'

export default class Province {
  _name
  _producers
  _totalProduction
  _demand
  _price
  constructor(doc) {
    this._name = doc.name
    this._producers = [] // 생산자
    this._totalProduction = 0 // 생산량?
    this._demand = doc.demand // 수요
    this._price = doc.price // 가격
    doc.producers.forEach(d => this.addProducer(new Producer(this, d)))
  }
  addProducer(arg) {
    this._producers.push(arg)
    this._totalProduction += arg.production
  }
  get name() {
    return this._name
  }
  get producers() {
    return this._producers
  }
  get totalProduction() {
    return this._totalProduction
  }
  set totalProduction(arg) {
    this._totalProduction = arg
  }
  get demand() {
    return this._demand
  }
  set demand(arg) {
    this._demand = parseInt(arg)
  }
  get price() {
    return this._price
  }
  set price(arg) {
    this._price = parseInt(arg)
  }

  get shortfall() {
    // 생산 부족분 계산
    return this._demand - this.totalProduction
  }
  get demandValue() {
    // 수요
    return this.satisfiedDemand * this.price
  }
  get satisfiedDemand() {
    // 수요충족
    return Math.min(this._demand, this.totalProduction)
  }
  get demandCost() {
    // 비용
    let remainingDemand = this.demand
    let result = 0
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach(p => {
        const contribution = Math.min(remainingDemand, p.production)
        remainingDemand -= contribution
        result += contribution * p.cost
      })
    return result
  }
  get profit() {
    // 수익
    return this.demandValue - this.demandCost
  }
}
