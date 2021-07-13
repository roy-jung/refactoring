const scenario = {
  primaryForce: 100,
  secondaryForce: 10,
  mass: 10,
  delay: 40,
}

const getDistance = (acc, time) => 0.5 * acc * time ** 2
const acceleration = (force, mass) => force / mass
const primary = (delay, primaryForce, mass, time) => {
  const primaryAcceleration = acceleration(primaryForce, mass)
  return { primaryAcceleration, primaryResult: getDistance(primaryAcceleration, Math.min(time, delay)) }
}
const distanceTravelled = ({ delay, primaryForce, secondaryForce, mass }, time) => {
  var { primaryAcceleration, primaryResult } = primary(delay, primaryForce, mass, time)
  const secondaryTime = time - delay
  if (secondaryTime <= 0) return primaryResult
  return (
    primaryResult +
    primaryAcceleration * delay * secondaryTime +
    getDistance(acceleration(primaryForce + secondaryForce, mass), secondaryTime)
  )
}

console.log(distanceTravelled(scenario, 100))
