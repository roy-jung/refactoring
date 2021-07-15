const feathers = birds => new Map(birds.map(b => [b.name, feather(b)]))
const velocities = birds => new Map(birds.map(b => [b.name, velocity(b)]))

class Bird {
  constructor(bird) {
    Object.assign(this, bird)
  }
  get feather() {
    return '알수없음'
  }
  get velocity() {
    return null
  }
}
class EuropeanSwallow extends Bird {
  get feather() {
    return '보통'
  }
  get velocity() {
    return 35
  }
}
class AfricalSwallow extends Bird {
  numberOfCoconuts
  get feather() {
    return this.numberOfCoconuts > 2 ? '지침' : '보통'
  }
  get velocity() {
    return 40 - 2 * this.numberOfCoconuts
  }
}
class NorwegianBlueParrot extends Bird {
  voltage
  isNailed
  get feather() {
    return this.voltage > 100 ? '그을림' : '예쁨'
  }
  get velocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10
  }
}

const createBird = bird => {
  switch (bird.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird)
    case '아프리카 제비':
      return new AfricalSwallow(bird)
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird)
    default:
      return new Bird(bird)
  }
}

const feather = bird => {
  return createBird(bird).feather
}
const velocity = bird => {
  return createBird(bird).velocity
}

const birds = [
  { name: '유제', type: '유럽 제비' },
  { name: '아제1', type: '아프리카 제비', numberOfCoconuts: 2 },
  { name: '아제2', type: '아프리카 제비', numberOfCoconuts: 4 },
  { name: '파앵1', type: '노르웨이 파랑 앵무', isNailed: false, voltage: 3000 },
  { name: '파앵2', type: '노르웨이 파랑 앵무', isNailed: true, voltage: 50 },
]
console.log(...feathers(birds))
console.log(...velocities(birds))
