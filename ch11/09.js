class Score {
  #candidate
  #medicalExam
  #scoringGuide
  #result
  #healthLevel
  #highMedicalRiskFlag
  #certificationGrade
  constructor(candidate, medicalExam, scoringGuide) {
    this.#candidate = candidate
    this.#medicalExam = medicalExam
    this.#scoringGuide = scoringGuide
  }
  exec() {
    this.#result = 0
    this.#healthLevel = 0
    this.#highMedicalRiskFlag = false
    this.scoreSmoking()
    this.certificationGrade()
    this.#result -= Math.max(this.#healthLevel - 5, 0)
    return {
      result: this.#result,
      certificationGrade: this.#certificationGrade,
      highMedicalRiskFlag: this.#highMedicalRiskFlag,
    }
  }

  certificationGrade() {
    this.#certificationGrade = 'regular'
    if (this.#scoringGuide.stateWithLowCertification(this.#candidate.originState)) {
      this.#certificationGrade = 'low'
      this.#result -= 5
    }
  }

  scoreSmoking() {
    if (this.#medicalExam.isSmoker) {
      this.#healthLevel += 10
      this.#highMedicalRiskFlag = true
    }
  }
}

const score = (candidate, medicalExam, scoringGuide) => {
  return new Score(candidate, medicalExam, scoringGuide).exec()
}

const scoringGuide = { stateWithLowCertification: state => state === 'CA' || state === 'ME' }
console.log(score({ originState: 'CA' }, { isSmoker: true }, scoringGuide))
console.log(score({ originState: 'NY' }, { isSmoker: false }, scoringGuide))
