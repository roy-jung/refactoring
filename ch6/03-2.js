class Order {
  constructor(aRecord) {
    this._data = aRecord
  }
  get quantity() {
    return this._data.quantity
  }
  get itemPrice() {
    return this._data.itemPrice
  }
  get price() {
    return (
      this.quantity * this.itemPrice -
      Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
      Math.min(this.quantity * this.itemPrice * 0.1, 100)
    )
  }
}

const orderA = new Order({
  itemPrice: 600,
  quantity: 3,
})
const orderB = new Order({
  itemPrice: 8000,
  quantity: 2,
})

console.log(orderA.price)
console.log(orderB.price)
