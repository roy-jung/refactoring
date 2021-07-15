import dayjs from 'dayjs'

const plan = {
  summerStart: dayjs('2021-07-01'),
  summerEnd: dayjs('2021-08-31'),
  summerRate: 1000,
  regularRate: 1100,
  regularServiceCharge: 100,
}
const summer = aDate => !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)

const sumerCharge = quantity => quantity * plan.summerRate
const regularCharge = quantity => quantity * plan.regularRate + plan.regularServiceCharge
const getCharge1 = (quantity, aDate) => (summer(aDate) ? sumerCharge(quantity) : regularCharge(quantity))
console.log(getCharge1(10, dayjs('2021-06-29')))
console.log(getCharge1(10, dayjs('2021-08-15')))

const charges = {
  summer: quantity => quantity * plan.summerRate,
  regular: quantity => quantity * plan.regularRate,
}

const getCharge2 = (quantity, aDate) => charges[summer(aDate) ? 'summer' : 'regular'](quantity)
console.log(getCharge2(10, dayjs('2021-06-29')))
console.log(getCharge2(10, dayjs('2021-08-15')))
