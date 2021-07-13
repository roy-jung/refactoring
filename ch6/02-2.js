const gatherCustomerData = (out, aCustomer) => {
  out.push(['name', aCustomer.name])
  out.push(['location', aCustomer.location])
}
const reportLines = aCustomer => {
  const lines = []
  gatherCustomerData(lines, aCustomer)
  return lines
}

const customerA = { name: 'roy', location: 'seoul' }
const customerB = { name: 'jay', location: 'incheon' }
console.log(reportLines(customerA))
console.log(reportLines(customerB))
