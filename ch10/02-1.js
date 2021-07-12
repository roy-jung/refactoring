const disabilityAmount = anEmployee => {
  if (anEmployee.seniority < 2) return 0
  if (anEmployee.monthsDisabled > 12) return 0
  if (anEmployee.isPartTime) return 0
  // 장애 수당 계산
}
