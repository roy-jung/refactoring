class SublclassResponsibilityError extends Error {}

class Party {
  get monthlyCost() {
    throw new SublclassResponsibilityError()
    return 0
  }
  get annualCost() {
    return this.monthlyCost * 12
  }
}

class Employee extends Party {
  get monthlyCost() {
    return 10
  }
}
class Department extends Party {
  get monthlyCost() {
    return 20
  }
}

const e = new Employee()
const d = new Department()
const p = new Party()
console.log(p.annualCost, e.annualCost, d.annualCost)
