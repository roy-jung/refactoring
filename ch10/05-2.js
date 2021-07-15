const registry = { billingPlans: { basic: '' } }

const createUnknownCustomer = () => ({
  isUnknown: true,
  name: '거주자',
  billingPlan: registry.billingPlans.basic,
  paymentHistory: {
    weeksDelinquentInLastYear: 0,
  },
})
const isUnknown = arg => arg.isUnknown

class Site {
  _customer
  get customer() {
    return this._customer === '미확인 고객' ? createUnknownCustomer() : this._customer
  }
  get isUnknown() {
    return false
  }
}

class Customer {
  _name
  _billingPlan
  _paymentHistory
  get name() {
    return this._name
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
  const weeksDelinquent = customer.paymentHistory.weeksDelinquentInLastYear
}
