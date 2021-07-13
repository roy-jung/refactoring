import { readJSON } from '../fileController.js'
import { statement } from './statement.js'

const invoices = readJSON('ch1/invoices.json')
const plays = readJSON('ch1/plays.json')

invoices.forEach(invoice => {
  console.log(statement(invoice, plays))
})
