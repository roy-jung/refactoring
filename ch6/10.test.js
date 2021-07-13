import { describe, it } from 'mocha'
import { assert } from 'chai'
import cloneDeep from 'lodash/cloneDeep.js'
import { enrichReading } from './10.js'

it('check reading uncharged', () => {
  const baseReading = {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017,
  }
  const oracle = cloneDeep(baseReading)
  enrichReading(baseReading)
  assert.deepEqual(baseReading, oracle)
})
