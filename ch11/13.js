const Resource = (() => {
  let id = 0
  return class Resource {
    id
    constructor() {
      id += 1
      this.id = id
    }
    static create() {
      return new Resource()
    }
  }
})()

class ResourcePool {
  available = []
  allocated = new Set()
  get() {
    let result
    try {
      result = this.available.pop()
      if (!result) throw Error('no available resource')
      this.allocated.add(result)
    } catch (e) {
      result = Resource.create()
      this.allocated.add(result)
    }
    return result
  }
  add() {
    this.available.push(Resource.create())
  }
}

const pool = new ResourcePool()
pool.get()
console.log({ available: pool.available, allocated: pool.allocated })
pool.add()
pool.add()
pool.add()
console.log({ available: pool.available, allocated: pool.allocated })
pool.get()
pool.get()
pool.get()
console.log({ available: pool.available, allocated: pool.allocated })
pool.get()
console.log({ available: pool.available, allocated: pool.allocated })
