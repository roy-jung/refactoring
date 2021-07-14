const scenario = {
  primaryForce: 100,
  secondaryForce: 10,
  mass: 10,
  delay: 40,
}

// 가속도 = 힘 / 무게
const acceleration = (force, mass) => force / mass

// 가속운동시 거리 = 1/2 * a * t^2
const acceleratedDistance = (acc, time) => (acc * time ** 2) / 2

// 등속운동시 거리 = 속도 * 시간
const sameVelocityDistance = (velocity, time) => velocity * time

const distanceTravelled = ({ primaryForce, secondaryForce, mass, delay }, time) => {
  const primaryAcceleration = acceleration(primaryForce, mass)
  const secondaryAcceleration = acceleration(primaryForce + secondaryForce, mass)
  const secondaryTime = Math.max(time - delay, 0)
  return (
    acceleratedDistance(primaryAcceleration, Math.min(time, delay)) +
    acceleratedDistance(secondaryAcceleration, secondaryTime) +
    sameVelocityDistance(primaryAcceleration * delay, secondaryTime)
  )
}

console.log(distanceTravelled(scenario, 100))
