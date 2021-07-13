const payAmount = employee => {
  let result
  if (employee.isSeperated) result = { amount: 0, reasonCode: 'SEP' }
  // 퇴사
  else {
    if (employee.isRetired) result = { amount: 0, reasonCode: 'RET' }
    // 은퇴
    else {
      // 급여계산
      result = { amount: 100, reasonCode: 'WRK' } // 재직
    }
  }
  return result
}
