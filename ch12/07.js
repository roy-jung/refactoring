class Person {
  #name
  constructor(name) {
    this.#name = name
  }
  get name() {
    return this.#name
  }
  get genderCode() {
    return 'X'
  }
}
class Male extends Person {
  get genderCode() {
    return 'M'
  }
}
class Female extends Person {
  get genderCode() {
    return 'F'
  }
}

const people = [new Male('재남'), new Female('지금'), new Male('로이'), new Female('이지')]
const numberOfMales = people.filter(p => p instanceof Male).length
console.log(numberOfMales)
