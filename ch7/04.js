class Order {
  _quantity
  _item
  constructor(quantity, item) {
    this._quantity = quantity
    this._item = item
  }
  get price() {
    let basePrice = this._quantity * this._item.price
    let discountFactor = 0.98
    if (basePrice > 1000) discountFactor -= 0.03
    return basePrice * discountFactor
  }
}
const order = new Order(10, { price: 1000 })
console.log(order.price)
