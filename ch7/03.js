class Order {
  #priority
  constructor(data) {
    this.#priority = new Priority(data.priority)
  }
  get priority() {
    return this.#priority
  }
  set priority(aString) {
    this.#priority = new Priority(aString)
  }
  get priorityString() {
    return this.#priority.toString()
  }
}

class Priority {
  static legalValues() {
    return ['low', 'normal', 'high', 'rush']
  }
  #value
  constructor(value) {
    if (value instanceof Priority) return value
    if (Priority.legalValues().includes(value)) this.#value = value
    else throw new Error(`<${value}> is invalid for Priority`)
    this.#value = value
  }
  toString() {
    return this.#value
  }
  get _index() {
    return Priority.legalValues().findIndex(s => s === this.#value)
  }
  equals(other) {
    return this._index === other._index
  }
  higherThan(other) {
    return this._index > other._index
  }
  lowerThan(other) {
    return this._index < other._index
  }
}

const client1 = () => {
  const orders = [{ priority: 'high' }, { priority: 'rush' }, { priority: 'low' }, { priority: 'normal' }].map(
    o => new Order(o),
  )
  const highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority('normal'))).length
  return highPriorityCount
}
console.log(client1())
