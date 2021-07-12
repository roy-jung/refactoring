const discount = (inputValue, quantity) => {
  if (inputValue > 50) inputValue = inputValue - 2
  if (quantity > 100) inputValue = inputValue - 1
  return inputValue
}
console.log(discount(40, 90))
console.log(discount(70, 90))
console.log(discount(70, 110))
