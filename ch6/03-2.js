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
  get basePrice() {
    return this.quantity * this.itemPrice
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05
  }
  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100)
  }
  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping
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
