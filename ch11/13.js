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
    const resource = this.available.length === 0 ? Resource.create() : this.available.pop()
    this.allocated.add(resource)
    return resource
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
