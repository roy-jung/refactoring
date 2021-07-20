class Place {
  _date
  constructor() {
    this._date = new Date('2021-07-08T10:00:00.000Z')
  }
  plusDays(time) {
    this._date.setHours(this._date.getHours() + time)
    return this
  }
  minusDays(time) {
    this._date.setHours(this._date.getHours() - time)
    return this
  }
  get date() {
    return this._date
  }
}
class Order {
  deliveryState
  placedOn
  constructor(deliveryState) {
    this.deliveryState = deliveryState
    this.placedOn = new Place()
  }
}

function getDeliveryTime(anOrder, isRush) {
  let deliveryTime
  if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = isRush ? 1 : 2
  else if (['NY', 'NH'].includes(anOrder.deliveryState)) {
    deliveryTime = 2
    if (anOrder.deliveryState === 'NH' && isRush) deliveryTime = 3
  } else if (isRush) deliveryTime = 3
  else if (anOrder.deliveryState === 'ME') deliveryTime = 3
  else deliveryTime = 4
  return deliveryTime
}

const deliveryDate = (anOrder, isRush) => {
  const deliveryTime = getDeliveryTime(anOrder, isRush)
  let result = anOrder.placedOn.plusDays(2 + deliveryTime)
  if (isRush) result = result.minusDays(1)
  return result
}
const rushDeliveryDate = anOrder => deliveryDate(anOrder, true)
const regularDeliveryDate = anOrder => deliveryDate(anOrder, false)

console.log(rushDeliveryDate(new Order('MA')).date)
console.log(rushDeliveryDate(new Order('NH')).date)
console.log(regularDeliveryDate(new Order('CT')).date)
console.log(regularDeliveryDate(new Order('ME')).date)
