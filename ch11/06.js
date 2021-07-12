const thermostat = {
  selectedTemperature: 25,
  currentTemperature: 27,
}

class HeatingPlan {
  #max
  #min
  get targetTemperature() {
    if (thermostat.selectedTemperature > this.#max) return this.#max
    else if (thermostat.selectedTemperature < this.#min) return this.#min
    else return thermostat.selectedTemperature
  }
}

const temperatureController = () => {
  const setToHeat = () => {}
  const setToCool = () => {}
  const setOff = () => {}

  const heatingPlan = new HeatingPlan()
  if (heatingPlan.targetTemperature > thermostat.currentTemperature) setToHeat()
  else if (heatingPlan.targetTemperature < thermostat.currentTemperature) setToCool()
  else setOff()
}
