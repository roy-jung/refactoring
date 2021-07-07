class Account {
  daysOverdrawn
  type = { isPremium: false }
  constructor(daysOverdrawn, type) {
    this.daysOverdrawn = daysOverdrawn
    this.type = type
  }
  get bankCharge() {
    let result = 4.5
    if (this.daysOverdrawn > 0) result += this.overdraftCharge
    return result
  }
  get overdraftCharge() {
    // 마통이자
    if (this.type.isPremium) {
      const baseCharge = 10
      if (this.daysOverdrawn <= 7) return baseCharge
      return baseCharge + (this.daysOverdrawn - 7) * 0.85
    }
    return this.daysOverdrawn * 1.75
  }
}

const loan = new Account(10, { isPremium: true })
const repo = new Account(10, { isPremium: false })

console.log({ name: 'loan', charge: loan.bankCharge, overdraftCharge: loan.overdraftCharge })
console.log({ name: 'repo', charge: repo.bankCharge, overdraftCharge: repo.overdraftCharge })
