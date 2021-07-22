import dayjs from 'dayjs'

class Booking {
  _show
  _date
  _premiumDelegate
  constructor(show, date) {
    this._show = show
    this._date = date
  }
  get hasTalkback() {
    return this._premiumDelegate
      ? this._premiumDelegate.hasTalkback
      : this._show.hasOwnProperty('talkback') && !this.isPeakDay
  }
  get basePrice() {
    let result = this._show.price
    if (this.isPeakDay) result += Math.round(result * 0.15)
    return this._premiumDelegate ? this._premiumDelegate.extendBasePrice(result) : result
  }
  get isPeakDay() {
    return this._date.isAfter(dayjs('2021-07-15')) && this._date.isBefore(dayjs('2021-07-31'))
  }
  get hasDinner() {
    return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined
  }
  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras)
  }
}

class PremiumBookingDelegate {
  #host
  #extras
  constructor(hostBooking, extras) {
    this.#host = hostBooking
    this.#extras = extras
  }
  extendBasePrice(base) {
    return Math.round(base + this.#extras.premiumFee)
  }
  get hasTalkback() {
    return this.#host._show.hasOwnProperty('talkback')
  }
  get hasDinner() {
    return this.#extras.hasOwnProperty('dinner') && !this.#host.isPeakDay
  }
}
const createBooking = (show, date) => new Booking(show, date)
const createPremiumBooking = (show, date, extras) => {
  const result = new Booking(show, date)
  result._bePremium(extras)
  return result
}

const booking = createBooking({ price: 100, talkback: true }, dayjs('2021-07-11'))
const premiumBooking1 = createPremiumBooking({ price: 100, talkback: true }, dayjs('2021-07-17'), {
  dinner: true,
  premiumFee: 10,
})
const premiumBooking2 = createPremiumBooking({ price: 100 }, dayjs('2021-07-17'), {
  dinner: true,
  premiumFee: 10,
})
console.log({
  price: booking.basePrice,
  dinner: booking.hasDinner,
  talkback: booking.hasTalkback,
  peakDay: booking.isPeakDay,
})
console.log({
  price: premiumBooking1.basePrice,
  dinner: premiumBooking1.hasDinner,
  talkback: premiumBooking1.hasTalkback,
  peakDay: premiumBooking1.isPeakDay,
})
console.log({
  price: premiumBooking2.basePrice,
  dinner: premiumBooking2.hasDinner,
  talkback: premiumBooking2.hasTalkback,
  peakDay: premiumBooking2.isPeakDay,
})
