class Organization {
  #name
  #country
  constructor(data) {
    this.#name = data.name
    this.#country = data.country
  }
  get name() {
    return this.#name
  }
  set name(aString) {
    this.#name = aString
  }
  get country() {
    return this.#country
  }
  set country(aCountry) {
    this.#country = aCountry
  }
}
const organization = new Organization({ name: '애크미 구스베리', country: 'GB' })
