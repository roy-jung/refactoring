class Customer {
  #id
  constructor(id) {
    this.#id = id
  }
  get id() {
    return this.#id
  }
}

class Order {
  #number
  #customer
  constructor(data) {
    this.#number = data.number
    this.#customer = new Customer(data.customer)
  }
  get customer() {
    return this.#customer
  }
}

const o = new Order({ number: 1, customer: 'a' })
console.log(o.customer.id)
