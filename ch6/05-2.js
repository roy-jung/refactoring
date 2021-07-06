// p185

const someCustomers = [
  {
    name: 'roy',
    address: { state: 'MA' },
  },
  {
    name: 'jay',
    address: { state: 'CT' },
  },
  {
    name: 'kay',
    address: { state: 'ME' },
  },
  {
    name: 'kai',
    address: { state: 'NONE' },
  },
  {
    name: 'roi',
    address: { state: 'VT' },
  },
  {
    name: 'rai',
    address: { state: 'NH' },
  },
  {
    name: 'rey',
    address: { state: 'RI' },
  },
]

const inNewEngland = state => {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state)
}

const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state))

console.log(newEnglanders)
