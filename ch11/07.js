class Person {
  #name
  #id
  constructor(id) {
    this.#id = id
  }
  get name() {
    return this.#name
  }
  set name(name) {
    this.#name = name
  }
  get id() {
    return this.#id
  }
}
const martin = new Person('1234')
martin.name = 'Martin'
