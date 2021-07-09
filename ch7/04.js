class Order {
  #quantity
  #item
  constructor(quantity, item) {
    this.#quantity = quantity
    this.#item = item
  }
  get price() {
    return this.basePrice * this.discountFactor
  }

  get discountFactor() {
    let discountFactor = 0.98
    if (this.basePrice > 1000) discountFactor -= 0.03
    return discountFactor
  }

  get basePrice() {
    return this.#quantity * this.#item.price
  }
}
const order = new Order(10, { price: 1000 })
console.log(order.price)
