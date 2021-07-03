const moreThanFiveLateDeliveries = aDriver => aDriver.numberOfLateDeliveries > 5
const rating = aDriver => (moreThanFiveLateDeliveries(aDriver) ? 2 : 1)

const DriverA = { name: 'A', numberOfLateDeliveries: 10 }
const DriverB = { name: 'B', numberOfLateDeliveries: 4 }

console.log(DriverA.name, rating(DriverA))
console.log(DriverB.name, rating(DriverB))
