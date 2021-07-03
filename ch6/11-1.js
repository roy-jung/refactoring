import { readJSON } from '../fileController.js'

const products = readJSON('ch6/11-products.json')
const shippingMethod = {
  discountFee: 0.1,
  feePerCase: 0.03,
  discountThreshold: 0.12,
}

const priceOrder = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee : shippingMethod.feePerCase
  const shippingCost = quantity * shippingPerCase
  const price = basePrice - discount + shippingCost
  return price
}

products.forEach(product => {
  console.log(priceOrder(product, 10, shippingMethod))
})
