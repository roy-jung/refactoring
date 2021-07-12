class ShippingRules {
  data
  constructor(data) {
    this.data = data
  }
}
const countryData = {
  shippingRules: {
    US: 10,
    CA: 7,
  },
}
const errorList = []

const localShippingRules = country => {
  const data = countryData.shippingRules[country]
  if (data) return new ShippingRules(data)
  else return -23
}
const calculateShippingCosts = order => {
  // 관련 없는 코드
  const shippingRules = localShippingRules(order.country)
  if (shippingRules < 0) return shippingRules
  // 관련 없는 코드
}
const execute = order => {
  const state = calculateShippingCosts(order)
  if (state < 0) errorList.push({ order, errorCode: state })
}

execute({ country: 'US' })
execute({ country: 'CA' })
execute({ country: 'KO' })

console.log(errorList)
