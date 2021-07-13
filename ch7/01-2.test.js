import { assert } from 'chai'
import { describe, it } from 'mocha'
import { getCustomer, writeData, compareUsage } from './01-2.js'

describe('customerData', () => {
  it('initial usage of 1920 at 2016/1 to be 50', () => {
    assert.equal(getCustomer()['1920'].usages['2016']['1'], 50)
  })
  it('writeData', () => {
    writeData('1920', '2016', '1', 53)
    assert.equal(getCustomer()['1920'].usages['2016']['1'], 53)
  })
  it('compareUsage', () => {
    const { laterAmount, change } = compareUsage('1920', '2016', '1')
    assert.equal(laterAmount, 53)
    assert.equal(change, -17)
  })
})
