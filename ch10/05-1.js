const registry = { billingPlans: { basic: '' } }
class Site {
  _customer
  get customer() {
    return this._customer
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
  let customerName
  if (customer === '미확인 고객') customerName = '거주자'
  else customerName = customer.name
}
const client2 = () => {
  const customer = new Site().customer
  const plan = customer === '미확인 고객' ? registry.billingPlans.basic : customer.billingPlan
}
const client3 = () => {
  const customer = new Site().customer
  if (customer !== '미확인 고객') customer.billingPlan = 'new Plan'
}
const client4 = () => {
  const customer = new Site().customer
  const weeksDelinquent = customer === '미확인 고객' ? 0 : customer.paymentHsitry.weeksDelinquentInLastYear
}
