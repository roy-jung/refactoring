const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
})
const baseRate = (month, year) => year - 2000 + month

const client1 = () => {
  const aReading = acquireReading()
  const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity
  return baseCharge
}

const client2 = () => {
  const taxThreshold = year => (year - 2000) * 0.1
  const aReading = acquireReading()
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))
  return taxableCharge
}

const client3 = () => {
  const aReading = acquireReading()
  const calculateBaseCharge = aReading => baseRate(aReading.month, aReading.year) * aReading.quantity
  const basicChargeAmount = calculateBaseCharge(aReading)
  return basicChargeAmount
}

;[client1, client2, client3].forEach(c => console.log(c()))
