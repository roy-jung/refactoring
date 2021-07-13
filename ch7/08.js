class Person {
  _name
  _department
  constructor(name, department) {
    this._name = name
    this._department = department
  }
  get name() {
    return this._name
  }
  get manager() {
    return this._department.manager
  }
}

class Department {
  _manager
  constructor(manager) {
    this._manager = manager
  }
  get manager() {
    return this._manager
  }
}

const jn = new Person('재남', new Department('로이'))
console.log(jn.manager)
