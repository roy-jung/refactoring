class Person {
  #name
  #id
  get name() {
    return this.#name
  }
  set name(name) {
    this.#name = name
  }
  get id() {
    return this.#id
  }
  set id(id) {
    this.#id = id
  }
}
const martin = new Person()
martin.name = 'Martin'
martin.id = '1234'
