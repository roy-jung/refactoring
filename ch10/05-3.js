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

const enrichSite = site => {
  const res = cloneDeep(site)
  const unknownCustomer = { 
    isUnknown: true, name: '거주자', billingPlan: registry.billingPlans.basic,
    paymentHistory: { weeksDelinquentInLastYear: 0 } }
  if (isUnknown(res.customer)) res.customer = unknownCustomer
  else res.customer.isUnknown = false
  return res
}
function isUnknown(customer) {
  if (customer === '미확인 고객') return true
  return customer.isUnknown
}

const client1 = () => {
  const rawSite = acquireSiteData()
  const site = enrichSite(rawSite)
  else customerName = site.customer.name
}
const client2 = () => {
  const customer = acquireSiteData().customer
  const plan =  customer.billingPlan
}
const client3 = () => {
  const customer = acquireSiteData().customer
  const weeksDelinquent = customer.paymentHistory.weeksDelinquentInLastYear
}
