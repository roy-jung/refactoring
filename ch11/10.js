class ChargeCalculator {
  #customer
  #usage
  #provider
  constructor(customer, usage, provider) {
    this.#customer = customer
    this.#usage = usage
    this.#provider = provider
  }
  get baseCharge() {
    return this.#customer.baseRate * this.#usage
  }
  get charge() {
    return this.baseCharge + this.#provider.connectionCharge
  }
}

const customer = { baseRate: 100 }
const usage = 1000
const provider = { connectionCharge: 50 }
const monthCharge = new ChargeCalculator(customer, usage, provider).charge
console.log(monthCharge)
