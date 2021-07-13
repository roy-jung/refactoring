class Customer {
  #id
  constructor(id) {
    this.#id = id
  }
  get id() {
    return this.#id
  }
}

const findCustomer = id => _repositoryData.customers.get(id)
class Order {
  #number
  #customer
  constructor(data) {
    this.#number = data.number
    this.#customer = registerCustomer(data.customer)
  }
  get customer() {
    return findCustomer(this.#customer)
  }
}

const _repositoryData = { customers: new Map() }
const registerCustomer = id => {
  if (!_repositoryData.customers.has(id)) {
    _repositoryData.customers.set(id, new Customer(id))
  }
  return id
}

const o = new Order({ number: 1, customer: 'a' })
console.log(o.customer.id)
