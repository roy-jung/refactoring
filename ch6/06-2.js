import { assert } from 'chai'

class Person {
  constructor(data) {
    this._lastName = data.lastName
    this._firstName = data.firstName
  }
  get lastName() {
    return this._lastName
  }
  set lastName(name) {}
  get firstName() {
    return this._firstName
  }
}

let defaultOwnerData = { firstName: '마틴', lastName: '파울러' }
export const defaultOwner = () => new Person(defaultOwnerData)
export const setDefaultOwner = arg => {
  defaultOwnerData = arg
}

const owner1 = defaultOwner()
const owner2 = defaultOwner()
owner2.lastName = '파슨스'
assert.equal('파울러', owner2.lastName, 'owner2를 변경한 후 ')
