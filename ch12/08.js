class Employee {
  #name
  #id
  #monthlyCost
  constructor(name, id, monthlyCost) {
    this.#name = name
    this.#id = id
    this.#monthlyCost = monthlyCost
  }
  get monthlyCost() {
    return this.#monthlyCost
  }
  get name() {
    return this.#name
  }
  get id() {
    return this.#id
  }
  get annualCost() {
    return this.#monthlyCost * 12
  }
}

class Department {
  #name
  #staff
  constructor(name, staff) {
    this.#name = name
    this.#staff = staff
  }
  get name() {
    return this.#name
  }
  get staff() {
    return this.#staff
  }
  get totalMonthlyCost() {
    return this.#staff.map(e => e.monthlyCost).reduce((sum, cost) => sum + cost, 0)
  }
  get headCount() {
    return this.staff.length
  }
  get totalAnnualCost() {
    return this.totalMonthlyCost * 12
  }
}

const roy = new Employee('Roy', '123', 100)
const jay = new Employee('Jay', '456', 200)
const sales = new Department('Sales', [roy, jay])

console.log(roy.annualCost)
console.log(jay.annualCost)
console.log(sales.totalAnnualCost)
