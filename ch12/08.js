class Party {
  _name
  constructor(name) {
    this._name = name
  }
  get name() {
    return this._name
  }
  get monthlyCost() {
    throw Error('추상클래스입니다.')
    return 0
  }
  get annualCost() {
    return this.monthlyCost * 12
  }
}
class Employee extends Party {
  #id
  #monthlyCost
  constructor(name, id, monthlyCost) {
    super(name)
    this.#id = id
    this.#monthlyCost = monthlyCost
  }
  get monthlyCost() {
    return this.#monthlyCost
  }
  get id() {
    return this.#id
  }
}

class Department extends Party {
  #staff
  constructor(name, staff) {
    super(name)
    this.#staff = staff
  }
  get staff() {
    return this.#staff
  }
  get monthlyCost() {
    return this.#staff.map(e => e.monthlyCost).reduce((sum, cost) => sum + cost, 0)
  }
  get headCount() {
    return this.staff.length
  }
}

const roy = new Employee('Roy', '123', 100)
const jay = new Employee('Jay', '456', 200)
const sales = new Department('Sales', [roy, jay])

console.log(roy.annualCost)
console.log(jay.annualCost)
console.log(sales.annualCost)

console.log(new Party('카카').monthlyCost)
