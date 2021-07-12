import cloneDeep from 'lodash/cloneDeep.js'
const RECORDS = [
  {
    name: '애크미 보스턴',
    location: 'Malden MA',
    customer: {
      name: '애크미 산업',
      billingPlan: 'plan-451',
      paymentHistory: {
        weeksDelinquentInLastYear: 7,
      },
    },
  },
  {
    name: '물류창고 15',
    location: 'Malden MA',
    customer: '미확인 고객',
  },
]
const registry = { billingPlans: { basic: '' } }
class Site {
  _customer
  get customer() {
    return this._customer
  }
}
const acquireSiteData = () => new Site()

const client1 = () => {
  const site = acquireSiteData()
  const customer = site.customer
  let customerName
  if (customer === '미확인 고객') customerName = '거주자'
  else customerName = customer.name
}
const client2 = () => {
  const customer = acquireSiteData().customer
  const plan = customer === '미확인 고객' ? registry.billingPlans.basic : customer.billingPlan
}
const client3 = () => {
  const customer = acquireSiteData().customer
  const weeksDelinquent = customer === '미확인 고객' ? 0 : customer.paymentHsitry.weeksDelinquentInLastYear
}
