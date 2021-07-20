class Order {
  quantity
  itemPrice
  constructor() {}
  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95
      case 2:
        return basePrice * 0.9
      default:
        return basePrice
    }
  }
  get discountLevel() {
    return this.quantity > 100 ? 2 : 1
  }
}
