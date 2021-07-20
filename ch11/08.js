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

const createEmployee = (name, typeCode) => new Employee(name, typeCode)
const createEngineer = name => new Employee(name, 'E')

const client1 = () => {
  const document = { name: '재남', empType: 'M', leadEngineer: '로이' }
  const candidate = createEmployee(document.name, document.empType)
  const leadEngineer = createEngineer(document.leadEngineer)
  return { candidate: candidate.name, candidateType: candidate.type, leadEngineer: leadEngineer.name }
}

console.log(client1())
