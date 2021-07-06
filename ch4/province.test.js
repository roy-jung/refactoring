import Province from './province.js'
import { beforeEach, describe, it } from 'mocha'
import { expect } from 'chai'

const sampleProvinceData = () => ({
  name: 'Asia',
  producers: [
    { name: 'Byzzantium', cost: 10, production: 9 },
    { name: 'Attalia', cost: 12, production: 10 },
    { name: 'Sinope', cost: 10, production: 6 },
  ],
  demand: 30,
  price: 20,
})

describe('province', () => {
  let asia
  beforeEach(() => {
    asia = new Province(sampleProvinceData()) // 안돼!
  })

  it('shortfall', () => {
    expect(asia.shortfall).equal(5)
  })

  it('profit', () => {
    const asia = new Province(sampleProvinceData())
    expect(asia.profit).equal(230)
  })

  it('change production', () => {
    asia.producers[0].production = 20
    expect(asia.shortfall).equal(-6)
    expect(asia.profit).equal(292)
  })

  it('zero demand', () => {
    asia.demand = 0
    expect(asia.shortfall).equal(-25)
    expect(asia.profit).equal(0)
  })

  it('negative demand', () => {
    asia.demand = -1
    expect(asia.shortfall).equal(-26)
    expect(asia.profit).equal(-10)
  })

  it('empty string demand', () => {
    asia.demand = ''
    expect(asia.shortfall).NaN
    expect(asia.profit).NaN
  })
})

describe('no producers', () => {
  let noProducers
  beforeEach(() => {
    const data = { name: 'no producers', producers: [], demand: 30, price: 20 }
    noProducers = new Province(data)
  })
  it('shortfall', () => {
    expect(noProducers.shortfall).equal(30)
  })
  it('profit', () => {
    expect(noProducers.profit).equal(0)
  })
})

describe('string for producers', () => {
  it('', () => {
    const data = {
      name: 'String producers',
      producers: '',
      demand: 30,
      price: 20,
    }
    const prov = new Province(data)
    expect(prov.shortfall).equal(0)
  })
})
