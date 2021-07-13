class ProductionPlan {
  #initialProduction
  #adjustments = []
  constructor(production) {
    this.#initialProduction = production
    this.#adjustments = []
  }
  get production() {
    return this.#initialProduction + this.calculatedProductionAccumulator
  }
  get calculatedProductionAccumulator() {
    return this.#adjustments.reduce((sum, a) => sum + a.amount, 0)
  }

  applyAdjustment(anAdjustment) {
    this.#adjustments.push(anAdjustment)
  }
}

const products = new ProductionPlan(0)
products.applyAdjustment({ name: '사과', amount: 10 })
products.applyAdjustment({ name: '바나나', amount: 20 })

console.log(products.production)
