class TrackingInformation {
  _shippingCompany
  _trackingNumber
  get shippingCompany() {
    return this._shippingCompany
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg
  }
  get trackingNumber() {
    return this._trackingNumber
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg
  }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`
  }
}

class Shipment {
  _trackingInformation
  constructor() {
    this._trackingInformation = new TrackingInformation()
  }
  get trackingInfo() {
    return this._trackingInformation.display
  }
  get trackingInformation() {
    return this._trackingInformation
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation
  }
}

const client1 = () => {
  const aShipment = new Shipment()
  const vendor = { name: 'A-SHIP', number: '010-1234-5678' }
  aShipment.trackingInformation.shippingCompany = vendor.name
  aShipment.trackingInformation.trackingNumber = vendor.number
  return aShipment.trackingInfo
}
console.log(client1())
