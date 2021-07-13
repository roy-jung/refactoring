class AccountType {
  isPremium
  constructor(type) {
    this.isPremium = type.isPremium
  }
  overdraftCharge(daysOverdrawn) {
    // 마통이자
    if (this.isPremium) {
      const baseCharge = 10
      if (daysOverdrawn <= 7) return baseCharge
      return baseCharge + (daysOverdrawn - 7) * 0.85
    }
    return daysOverdrawn * 1.75
  }
}

class Account {
  daysOverdrawn // 연체일
  type
  constructor(daysOverdrawn, type) {
    this.daysOverdrawn = daysOverdrawn
    this.type = new AccountType(type)
  }
  get bankCharge() {
    // 이자
    let result = 4.5
    if (this.daysOverdrawn > 0) result += this.overdraftCharge
    return result
  }
  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdrawn)
  }
}

const loan = new Account(10, { isPremium: true })
const repo = new Account(10, { isPremium: false })

console.log({ name: 'loan', charge: loan.bankCharge, overdraftCharge: loan.overdraftCharge })
console.log({ name: 'repo', charge: repo.bankCharge, overdraftCharge: repo.overdraftCharge })
