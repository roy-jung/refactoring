const scenario = {
  primaryForce: 100,
  secondaryForce: 10,
  mass: 10,
  delay: 40,
}

const distanceTravelled = (scenario, time) => {
  let result
  let acc = scenario.primaryForce / scenario.mass // (a = F / m)
  let primaryTime = Math.min(time, scenario.delay)
  result = 0.5 * acc * primaryTime ** 2
  let secondaryTime = time - scenario.delay
  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass
    result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime ** 2
  }
  return result
}

console.log(distanceTravelled(scenario, 100))
