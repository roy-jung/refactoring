class Employee {
  #name
  constructor(name) {
    this.#name = name
  }
  get isPrivileged() {
    return false
  }
  assignCar() {
    console.log(this.#name, 'car assigned')
  }
  finishiConstruction() {
    if (this.isPrivileged) this.assignCar()
  }
}

class Manager extends Employee {
  #grade
  constructor(name, grade) {
    super(name)
    this.#grade = grade
    this.finishiConstruction()
  }
  get isPrivileged() {
    return this.#grade > 4
  }
}

class Producer extends Employee {
  #grade
  constructor(name, grade) {
    super(name)
    this.#grade = grade
    this.finishiConstruction()
  }
  get isPrivileged() {
    return this.#grade > 4
  }
}

const roy = new Employee('로이')
const jay = new Manager('제이', 5)
const kay = new Producer('케이', 6)
