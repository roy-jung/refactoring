const rating = aDriver => (aDriver.numberOfLateDeliveries > 5 ? 2 : 1)

const DriverA = { name: 'A', numberOfLateDeliveries: 10 }
const DriverB = { name: 'B', numberOfLateDeliveries: 4 }

console.log(DriverA.name, rating(DriverA))
console.log(DriverB.name, rating(DriverB))
