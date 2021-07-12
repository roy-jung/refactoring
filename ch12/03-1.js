class Party {}

export class Employee extends Party {
  #name
  #id
  #monthlyCost
  constructor(name, id, monthlyCost) {
    super()
    this.#name = name
    this.#id = id
    this.#monthlyCost = monthlyCost
  }
  get name() {
    return this.#name
  }
  get monthlyCost() {
    return this.#monthlyCost
  }
}

export class Department extends Party {
  #name
  #staff
  constructor(name, staff) {
    super()
    this.#name = name
    this.#staff = staff
  }
  get name() {
    return this.#name
  }
  get staff() {
    return this.#staff
  }
}
