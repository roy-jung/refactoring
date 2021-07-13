const findPerson = people => {
  const candidates = ['Don', 'John', 'Kent']
  return people.find(p => candidates.includes(p)) || ''
}

console.log(findPerson(['Roy', 'Jay', 'Dan', 'Kay', 'Joha', 'Peter', 'Ken', 'Clark']))
