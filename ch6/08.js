const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
}
class NumberRange {
  _data
  constructor(min, max) {
    this._data = { min, max }
  }
  get min() {
    return this._data.min
  }
  get max() {
    return this._data.max
  }
  contains(r) {
    return r.temp >= this.min && r.temp <= this.max
  }
}

const operatingPlan = {
  temperatureFloor: 50,
  temperatureCeiling: 56,
}
const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling)
const readingsOutsideRange = (station, range) => station.readings.filter(r => !range.contains(r))
console.log(readingsOutsideRange(station, range))
