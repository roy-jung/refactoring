const feathers = birds => new Map(birds.map(b => [b.name, feather(b)]))
const velocities = birds => new Map(birds.map(b => [b.name, velocity(b)]))

const feather = bird => {
  switch (bird.type) {
    case '유럽 제비':
      return '보통'
    case '아프리카 제비':
      return bird.numberOfCoconuts > 2 ? '지침' : '보통'
    case '노르웨이 파랑 앵무':
      return bird.voltage > 100 ? '그을림' : '예쁨'
    default:
      return '알수없음'
  }
}
const velocity = bird => {
  switch (bird.type) {
    case '유럽 제비':
      return 35
    case '아프리카 제비':
      return 40 - 2 * bird.numberOfCoconuts
    case '노르웨이 파랑 앵무':
      return bird.isNailed ? 0 : 10 + bird.voltage / 10
    default:
      return null
  }
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
