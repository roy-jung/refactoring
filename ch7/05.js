class Person {
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
}

class TelephoneNumber {
  get areaCode() {
    return this._areaCode;
  }
  set areaCode(arg) {
    this._areaCode = arg;
  }
  get number() {
    return this._number;
  }
  set number(arg) {
    this._number = arg;
  }
  get telephoneNumber() {
    return `(${this.areaCode}) ${this.number}`;
  }
}
