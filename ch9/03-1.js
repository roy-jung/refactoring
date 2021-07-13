class ProductionPlan {
  #adjustments = []
  get production() {
    return this.calculatedProduction
  }
  get calculatedProduction() {
    return this.#adjustments.reduce((sum, a) => sum + a.amount, 0)
  }

  applyAdjustment(anAdjustment) {
    this.#adjustments.push(anAdjustment)
  }
}

const products = new ProductionPlan()
products.applyAdjustment({ name: '사과', amount: 10 })
products.applyAdjustment({ name: '바나나', amount: 20 })

console.log(products.production)
