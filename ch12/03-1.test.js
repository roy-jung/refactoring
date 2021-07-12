import { describe, it } from 'mocha'
import { expect } from 'chai'
import { Employee, Department } from './03-1.js'

describe('Employee', () => {
  it('should be an instance of Employee', () => {
    const e = new Employee('Roy', 'A001', 3000)
    expect(e.name).to.equal('Roy')
    expect(e.monthlyCost).to.equal(3000)
  })
})
describe('Department', () => {
  it('should be an instance of Department', () => {
    const roy = new Employee('Roy', 'A001', 3000)
    const jay = new Employee('Jay', 'B002', 2500)
    const dep = new Department('영업', [roy, jay])
    expect(dep.name).to.equal('영업')
    expect(dep.staff).to.deep.equal([roy, jay])
  })
})
