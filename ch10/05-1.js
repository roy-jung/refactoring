const registry = { billingPlans: { basic: '' } }
class Site {
  _customer
  get customer() {
    return this._customer === '미확인 고객' ? new UnknownCustomer() : this._customer
  }
}

class Customer {
  _name
  _billingPlan
  _paymentHistory
  get name() {
    return this._name
  }
  get isUnknown() {
    return false
  }
  get billingPlan() {
    return this._billingPlan
  }
  set billingPlan(arg) {
    this._billingPlan = arg
  }
  get paymentHistory() {
    return this._paymentHistory
  }
}
class UnknownCustomer {
  get isUnknown() {
    return true
  }
  get name() {
    return '거주자'
  }
  get billingPlan() {
    return registry.billingPlans.basic
  }
  set billingPlan(arg) {}
  get paymentHistory() {
    return new NullPaymentHistory()
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0
  }
}

const isUnknown = arg => {
  if (!(arg instanceof Customer) && arg !== '미확인 고객') {
    throw new Error(`잘못된 값과 비교: <${arg}>`)
  }
  return arg.isUnknown
}
const client1 = () => {
  const customer = new Site().customer
  //...
  const customerName = customer.name
}
const client2 = () => {
  const customer = new Site().customer
  const plan = customer.billingPlan
}
const client3 = () => {
  const customer = new Site().customer
  customer.billingPlan = 'new Plan'
}
const client4 = () => {
  const customer = new Site().customer
  const weeksDelinquent = customer.paymentHistory.weeksDelinquentInLastYear
}
