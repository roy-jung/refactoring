class Person {
  #name
  #telephoneNumber
  constructor() {
    this.#telephoneNumber = new TelephoneNumber()
  }
  get name() {
    return this.#name
  }
  set name(arg) {
    this.#name = arg
  }
  get telephoneNumber() {
    return this.#telephoneNumber.toString()
  }
}

class TelephoneNumber {
  #areaCode
  #number
  get areaCode() {
    return this.#areaCode
  }
  set areaCode(arg) {
    this.#areaCode = arg
  }
  get number() {
    return this.#number
  }
  set number(arg) {
    this.#number = arg
  }
  toString() {
    return `(${this.areaCode}) ${this.number}`
  }
}
