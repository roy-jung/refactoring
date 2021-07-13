const retreivePricingPlan = () => ({
  base: 50, // 기본요금
  unit: 100, // 제품 하나당 가격
  discountThreshold: 7, // 몇개 이상부터 할인 적용할지 (8개: 0개 할인. 8개: 1개 할인. 10개: 3개 할인)
  discountFactor: 20, // 개당 할인액
})
const retreiveOrder = () => ({
  units: 8,
  isRepeat: true, // 반복주문시 추가할인
})
const chargeOrder = charge => console.log(charge)

// 반복주문, 8개 주문시:
// 기본요금50 + 주문액 100 * 8 = 850
// threshold 초과 1개에 대한 할인액 20
// 반복주문에 대한 추가할인액 20
// result: 810

const pricingPlan = retreivePricingPlan()
const order = retreiveOrder()
const baseCharge = pricingPlan.base
let charge
const chargePerUnit = pricingPlan.unit
const units = order.units
let discount
charge = baseCharge + units * chargePerUnit
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0)
discount = discountableUnits * pricingPlan.discountFactor
if (order.isRepeat) discount += 20
charge = charge - discount
chargeOrder(charge)
