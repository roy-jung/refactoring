const isNotEligibleForDisability = (anEmployee: any) =>
  anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime

const disabilityAmount = anEmployee => {
  if (isNotEligibleForDisability(anEmployee)) return 0
  // 장애 수당 계산
}
