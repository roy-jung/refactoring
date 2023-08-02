class Shipment {
  _shippingCompany;
  _trackingNumber;
  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

const client1 = () => {
  const aShipment = new Shipment();
  const vendor = { name: 'A-SHIP', number: '010-1234-5678' };
  aShipment._shippingCompany = vendor.name;
  aShipment._trackingNumber = vendor.number;
  return aShipment.trackingInfo;
};
console.log(client1());
