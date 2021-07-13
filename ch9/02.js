class Organization {
  #title
  #country
  constructor(data) {
    this.#title = data.title
    this.#country = data.country
  }
  get title() {
    return this.#title
  }
  set title(aString) {
    this.#title = aString
  }
  get country() {
    return this.#country
  }
  set country(aCountry) {
    this.#country = aCountry
  }
}
const organization = new Organization({ title: '애크미 구스베리', country: 'GB' })
console.log(organization.title)
