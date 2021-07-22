class Party {
  _name
  constructor(name) {
    this._name = name
  }
}

export class Employee extends Party {
  #id
  #monthlyCost
  constructor(name, id, monthlyCost) {
    super(name)
    this.#id = id
    this.#monthlyCost = monthlyCost
  }
  get name() {
    return this._name
  }
  get monthlyCost() {
    return this.#monthlyCost
  }
}

export class Department extends Party {
  #staff
  constructor(name, staff) {
    super(name)
    this.#staff = staff
  }
  get name() {
    return this._name
  }
  get staff() {
    return this.#staff
  }
}
