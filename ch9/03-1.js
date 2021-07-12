class ProductionPlan {
  #production = 0
  #adjustments = []
  get production() {
    return this.#production
  }
  applyAdjustment(anAdjustment) {
    this.#adjustments.push(anAdjustment)
    this.#production += anAdjustment.amount
  }
}

const products = new ProductionPlan()
products.applyAdjustment({ name: '사과', amount: 10 })
products.applyAdjustment({ name: '바나나', amount: 20 })

console.log(products.production)
