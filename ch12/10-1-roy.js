import dayjs from 'dayjs'

// roy's version - add 'Delegate' super class

class Delegate {
  _host
  constructor(host) {
    this._host = host
  }
  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback') && !this._host.isPeakDay
  }
  extendBasePrice(base) {
    return base
  }
  get hasDinner() {
    return undefined
  }
}

class PremiumDelegate extends Delegate {
  #extras
  constructor(host, extras) {
    super(host)
    this.#extras = extras
  }
  extendBasePrice(base) {
    return Math.round(base + this.#extras.premiumFee)
  }
  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback')
  }
  get hasDinner() {
    return this.#extras.hasOwnProperty('dinner') && !this._host.isPeakDay
  }
}

class Booking {
  _show
  #date
  #bookingDelegate
  constructor(show, date, extras) {
    this._show = show
    this.#date = date
    this.#bookingDelegate = this.delegate(extras)
  }
  delegate(extras) {
    if (extras) return new PremiumDelegate(this, extras)
    return new Delegate(this)
  }
  get hasTalkback() {
    return this.#bookingDelegate.hasTalkback
  }
  get basePrice() {
    let result = this._show.price
    if (this.isPeakDay) result += Math.round(result * 0.15)
    return this.#bookingDelegate.extendBasePrice(result)
  }
  get isPeakDay() {
    return this.#date.isAfter(dayjs('2021-07-15')) && this.#date.isBefore(dayjs('2021-07-31'))
  }
  get hasDinner() {
    return this.#bookingDelegate.hasDinner
  }
}

const createBooking = (show, date, extras = undefined) => new Booking(show, date, extras)
const booking = createBooking({ price: 100, talkback: true }, dayjs('2021-07-11'))
const premiumBooking1 = createBooking({ price: 100, talkback: true }, dayjs('2021-07-17'), {
  dinner: true,
  premiumFee: 10,
})
const premiumBooking2 = createBooking({ price: 100 }, dayjs('2021-07-17'), {
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
