class Employee {
  _name
  constructor(name) {
    this._name = name
  }
  toString() {
    return `${this._name} is a `
  }
}
class Engineer extends Employee {
  toString() {
    return `${super.toString()}engineer`
  }
}
class SalesPerson extends Employee {
  toString() {
    return `${super.toString()}salesperson`
  }
}
class Manager extends Employee {
  toString() {
    return `${super.toString()}manager`
  }
}

const createEmployee = (name, type) => {
  switch (type) {
    case 'engineer':
      return new Engineer(name)
    case 'salesperson':
      return new SalesPerson(name)
    case 'manager':
      return new Manager(name)
    default:
      throw new Error(`${type}라는 직원 유형은 없습니다.`)
  }
}

const roy = createEmployee('roy', 'engineer')
const jay = createEmployee('jay', 'manager')
const kay = createEmployee('kay', 'salesperson')
const tei = createEmployee('tei', 'nobody')

console.log(roy.toString(), jay.toString(), kay.toString())
