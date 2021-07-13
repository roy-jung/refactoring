import createPerformanceCalculator from './performanceCalculator.js'

const createStatementData = (invoice, plays) => {
  const playFor = aPerformance => plays[aPerformance.playID]
  const enrichPerformance = aPerformance => {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance))
    const result = { ...aPerformance }
    result.play = calculator.play
    result.amount = calculator.amount
    result.volumeCredits = calculator.volumeCredits
    return result
  }

  const totalAmount = performances => performances.reduce((total, p) => total + p.amount, 0)
  const totalVolumeCredits = performances => performances.reduce((total, p) => total + p.volumeCredits, 0)
  const enrichedPerformances = invoice.performances.map(enrichPerformance)
  return {
    customer: invoice.customer,
    performances: enrichedPerformances,
    totalAmount: totalAmount(enrichedPerformances),
    totalVolumeCredits: totalVolumeCredits(enrichedPerformances),
  }
}

export default createStatementData
