const reportLines = aCustomer => {
  const lines = []
  lines.push(['name', aCustomer.name])
  lines.push(['location', aCustomer.location])
  return lines
}

const customerA = { name: 'roy', location: 'seoul' }
const customerB = { name: 'jay', location: 'incheon' }
console.log(reportLines(customerA))
console.log(reportLines(customerB))
