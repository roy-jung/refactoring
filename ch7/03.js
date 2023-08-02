class Order {
  priority = '';
  constructor(data) {
    this.priority = data.priority;
  }

  get priority() {
    return this._priority;
  }

  set priority(aString) {
    this._priority = new Priority(aString);
  }

  get priorityString() {
    return this._priority.toString();
  }
}

class Priority {
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }

  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this._value = value;
    else throw new Error(`<${value}> is invalid for Priority`);
    this._value = value;
  }

  toString() {
    return this._value;
  }

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }
  equals(other) {
    return this._index === other._index;
  }
  higherThan(other) {
    return this._index > other._index;
  }
  lowerThan(other) {
    return this._index < other._index;
  }
}

const client1 = () => {
  const orders = [
    { priority: 'high' },
    { priority: 'rush' },
    { priority: 'low' },
    { priority: 'normal' },
  ].map((o) => new Order(o));
  const highPriorityCount = orders.filter((o) =>
    o.priority.higherThan(new Priority('normal'))
  ).length;
  return highPriorityCount;
};
console.log(client1());
