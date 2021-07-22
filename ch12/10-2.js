class Bird {
  _name
  _feather
  _species
  constructor(data) {
    this._name = data.name
    this._feather = data.feather
    this._species = Bird.getSpecies(this, data)
  }
  static getSpecies(bird, data) {
    switch (data.type) {
      case 'european':
        return new EuropeanSwallowDelegate(bird, data)
      case 'african':
        return new AfricanSwallowDelegate(bird, data)
      case 'norwegian':
        return new NorwegianBlueParrotDelegate(bird, data)
      default:
        return new SpeciesDelegate(bird, data)
    }
  }
  get name() {
    return this._name
  }
  get feather() {
    return this._species.feather
  }
  get airSpeedVelocity() {
    return this._species.airSpeedVelocity
  }
}

class SpeciesDelegate {
  _bird
  constructor(bird, data) {
    this._bird = bird
  }
  get airSpeedVelocity() {
    return null
  }
  get feather() {
    return this._bird._feather || '보통'
  }
}
class EuropeanSwallowDelegate extends SpeciesDelegate {
  get airSpeedVelocity() {
    return 35
  }
}
class AfricanSwallowDelegate extends SpeciesDelegate {
  #numberOfCoconuts
  constructor(bird, data) {
    super(bird, data)
    this.#numberOfCoconuts = data.numberOfCoconuts
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.#numberOfCoconuts
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  #voltage
  #isNailed
  _bird
  constructor(bird, data) {
    super(bird, data)

    this.#voltage = data.voltage
    this.#isNailed = data.isNailed
    this._bird = bird
  }
  get feather() {
    if (this.#voltage > 100) return '그을림'
    return this._bird._feather || '예쁨'
  }
  get airSpeedVelocity() {
    return this.#isNailed ? 0 : 10 + this.#voltage / 10
  }
}

const createBird = data => new Bird(data)
const birds = [
  createBird({ type: 'european', name: '유제' }),
  createBird({ type: 'african', name: '아제1', numberOfCoconuts: 2 }),
  createBird({ type: 'african', name: '아제2', numberOfCoconuts: 4 }),
  createBird({ type: 'norwegian', name: '파앵1', isNailed: false, voltage: 3000 }),
  createBird({ type: 'norwegian', name: '파앵2', isNailed: true, voltage: 50 }),
  new Bird({ name: '가짜새' }),
]
console.log(birds.map(b => ({ name: b.name, velocity: b.airSpeedVelocity, feather: b.feather })))
