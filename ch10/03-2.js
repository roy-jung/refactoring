const adjustCapital = anInstrument => {
  return anInstrument.capital <= 0 || anInstrument.interestRate <= 0 || anInstrument.duration <= 0
    ? 0
    : (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor
}
