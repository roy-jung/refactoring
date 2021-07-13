class Book {
  _reservations = []

  get reservation() {
    return this._reservations
  }

  addReservation(customer) {
    this._reservations.push(customer)
  }
}

const bookcafe = new Book()
bookcafe.addReservation({ name: 'roy' })
bookcafe.addReservation({ name: 'jay' })
console.log(bookcafe.reservation)
