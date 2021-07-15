const payAmount = employee => {
  // 퇴사
  if (employee.isSeperated) return { amount: 0, reasonCode: 'SEP' }

  // 은퇴
  if (employee.isRetired) return { amount: 0, reasonCode: 'RET' }

  // 급여계산로직...

  // (생략)
  return { amount: 100, reasonCode: 'WRK' } // 재직
}
