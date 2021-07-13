const price = order => {
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  )
}

const orderA = {
  itemPrice: 600,
  quantity: 3,
}
const orderB = {
  itemPrice: 8000,
  quantity: 2,
}

console.log(price(orderA))
console.log(price(orderB))
