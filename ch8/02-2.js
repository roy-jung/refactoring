class Account {
  _number
  _type
  _interestRate
  constructor(number, type, interestRate) {
    this._number = number
    this._type = type
    this._interestRate = interestRate
  }
  get interestRate() {
    return this._interestRate
  }
}
class AccountType {
  _name
  constructor(nameString) {
    this._name = nameString
  }
}
const minus = new AccountType('마통')
const acc = new Account(100000, minus, 0.39)
console.log(acc.interestRate)
