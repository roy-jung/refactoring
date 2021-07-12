import dayjs from 'dayjs'

const plan = {
  summerStart: dayjs('2021-07-01'),
  summerEnd: dayjs('2021-08-31'),
  summerRate: 1000,
  regularRate: 1100,
  regularServiceCharge: 100,
}

const getCharge = (quantity, aDate) => {
  if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) return quantity * plan.summerRate
  return quantity * plan.regularRate + plan.regularServiceCharge
}
console.log(getCharge(10, dayjs('2021-06-29')))
console.log(getCharge(10, dayjs('2021-08-15')))
