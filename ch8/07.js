const PEOPLE = [
  { age: 30, salary: 4000 },
  { age: 40, salary: 7000 },
  { age: 24, salary: 2800 },
  { age: 37, salary: 4600 },
  { age: 27, salary: 3200 },
]

const youngestAge = people => Math.min(...people.map(p => p.age))
const totalSalary = people => people.reduce((salary, p) => salary + p.salary, 0)

const getInfos = people => `최연소: ${youngestAge(people)}, 총급여: ${totalSalary(people)}`
console.log(getInfos(PEOPLE))
