const findPerson = people => {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') return 'Don'
    if (people[i] === 'John') return 'John'
    if (people[i] === 'Kent') return 'Kent'
  }
  return ''
}
console.log(findPerson(['Roy', 'Jay', 'Don', 'Kay', 'John', 'Peter', 'Kent', 'Clark']))
