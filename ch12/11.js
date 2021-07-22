import dayjs from 'dayjs'

class CatalogItem {
  _id
  _title
  _tags
  constructor(id, title, tags) {
    this._id = id
    this._title = title
    this._tags = tags
  }
  get id() {
    return this._id
  }
  get title() {
    return this._title
  }
  hasTag(arg) {
    return this._tags.includes(arg)
  }
}

class Scroll {
  #lastCleaned
  #catalogItem
  #id
  constructor(id, dataLastCleaned, catalogId, catalog) {
    this.#id = id
    this.#lastCleaned = dataLastCleaned
    this.#catalogItem = catalog.get(catalogId)
  }
  needsCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500
    return this.daysSinceLastCleaning(targetDate) > threshold
  }
  daysSinceLastCleaning(targetDate) {
    return targetDate.diff(this.#lastCleaned, 'd')
  }
  get id() {
    return this.#id
  }
  get title() {
    return this.#catalogItem._title
  }
  hasTag(arg) {
    return this.#catalogItem._tags.includes(arg)
  }
}

const catalog = new Map([
  ['icespear', new CatalogItem('icespear', '아이스스피어', ['magic', 'revered'])],
  ['fireball', new CatalogItem('fireball', '파이어볼', ['magic'])],
  ['meteor', new CatalogItem('meteor', '메테오', ['magic', 'revered'])],
])

const scrollData = [
  {
    id: 'A001',
    catalogId: 'icespear',
    lastCleaned: '2018-11-01',
  },
  {
    id: 'B002',
    catalogId: 'fireball',
    lastCleaned: '2018-09-01',
  },
  {
    id: 'C003',
    catalogId: 'meteor',
    lastCleaned: '2020-02-01',
  },
]
scrollData
  .map(record => new Scroll(record.id, dayjs(record.lastCleaned), record.catalogId, catalog))
  .forEach(scroll => {
    console.log({
      title: scroll.title,
      needsCleaning: scroll.needsCleaning(dayjs()),
      daysSinceLastCleaning: scroll.daysSinceLastCleaning(dayjs()),
      hasRevered: scroll.hasTag('revered'),
    })
  })
