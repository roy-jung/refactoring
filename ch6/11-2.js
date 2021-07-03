import { readJSON } from '../fileController.js'

console.log(process.argv)
class Order {
  product = {}
  constructor(product) {
    this.product = product
  }
}

const main = () => {
  try {
    const argv = process.argv
    if (argv.length < 3) throw new Error('파일명을 입력하세요')
    const filename = argv[argv.length - 1]
    const input = readJSON(filename)
    const orders = input.map(item => new Order(item))

    if (argv.includes('-r')) {
      const readyOrders = orders.filter(o => o.product.status === 'ready')
      console.log('ready', readyOrders.length)
    } else {
      console.log('not ready', orders.length)
    }
  } catch (err) {
    console.error(err)
  }
}
main()
