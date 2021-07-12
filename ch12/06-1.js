class Employee {
  #name
  #type
  constructor(name, type) {
    this.validateType(type)
    this.#name = name
    this.#type = type
  }
  validateType(arg) {
    if (!['engineer', 'manager', 'salesperson'].includes(arg)) throw new Error(`${arg}라는 직원 유형은 없습니다.`)
  }
  toString() {
    return `${this.#name} is a ${this.#type}`
  }
}
const roy = new Employee('roy', 'engineer')
const jay = new Employee('jay', 'manager')
const kay = new Employee('kay', 'salesperson')
const tei = new Employee('tei', 'nobody')
