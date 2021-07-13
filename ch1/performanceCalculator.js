class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance
    this.play = aPlay
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0)
  }

  get amount() {
    throw new Error('서브클래스 전용 메서드입니다.')
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000
    if (this.performance.audience > 30) result += 1000 * (this.performance.audience - 30)
    return result
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5)
  }
  get amount() {
    let result = 30000
    if (this.performance.audience > 20) result += 10000 + 500 * (this.performance.audience - 20)
    result += 300 * this.performance.audience
    return result
  }
}

const createPerformanceCalculator = (aPerformance, aPlay) => {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay)
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay)
    default:
      return new PerformanceCalculator(aPerformance, aPlay)
  }
}
export default createPerformanceCalculator
