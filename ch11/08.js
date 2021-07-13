class Employee {
  #name
  #typeCode
  constructor(name, typeCode) {
    this.#name = name
    this.#typeCode = typeCode
  }
  get name() {
    return this.#name
  }
  get type() {
    return this.#typeCode
  }
  static get legalTypeCodes() {
    return {
      E: 'Engineer',
      M: 'Manager',
      S: 'Salesperson',
    }
  }
}

const client1 = () => {
  const document = { name: '재남', empType: 'M', leadEngineer: '로이' }
  const candidate = new Employee(document.name, document.empType)
  const leadEngineer = new Employee(document.leadEngineer, 'E')
  return { candidate: candidate.name, leadEngineer: leadEngineer.name }
}

console.log(client1())
