class Place {
  plusDays(time) {
    const d = new Date('2021-07-08T10:00:00.000Z')
    d.setHours(d.getHours() + time)
    return d
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
const deliveryDate = (anOrder, isRush) => {
  if (isRush) {
    let deliveryTime
    if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1
    else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2
    else deliveryTime = 3
    return anOrder.placedOn.plusDays(1 + deliveryTime)
  } else {
    let deliveryTime
    if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2
    else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3
    else deliveryTime = 4
    return anOrder.placedOn.plusDays(2 + deliveryTime)
  }
}

console.log(deliveryDate(new Order('MA'), true))
console.log(deliveryDate(new Order('NH'), true))
console.log(deliveryDate(new Order('CT'), false))
console.log(deliveryDate(new Order('ME'), false))
