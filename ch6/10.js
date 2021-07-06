import cloneDeep from 'lodash/cloneDeep.js'

const baseRate = (month, year) => year - 2000 + month
const calculateBaseCharge = aReading => baseRate(aReading.month, aReading.year) * aReading.quantity
const taxThreshold = year => (year - 2000) * 0.1

export const enrichReading = original => {
  const result = cloneDeep(original)
  result.baseCharge = calculateBaseCharge(result)
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year))
  return result
}

const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
})

const client1 = () => {
  const rawReading = acquireReading()
  const aReading = enrichReading(rawReading)
  return aReading.baseCharge
}

const client2 = () => {
  const rawReading = acquireReading()
  const aReading = enrichReading(rawReading)
  return aReading.taxableCharge
}

const client3 = () => {
  const rawReading = acquireReading()
  const aReading = enrichReading(rawReading)
  return aReading.baseCharge
}

;[client1, client2, client3].forEach(c => console.log(c()))
