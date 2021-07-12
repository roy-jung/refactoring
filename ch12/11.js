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

class Scroll extends CatalogItem {
  #lastCleaned
  constructor(id, title, tags, dataLastCleaned) {
    super(id, title, tags)
    this.#lastCleaned = dataLastCleaned
  }
  needsCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500
    return this.daysSinceLastCleaning(targetDate) > threshold
  }
  daysSinceLastCleaning(targetDate) {
    return targetDate.diff(this.#lastCleaned, 'd')
  }
}

const data = [
  {
    id: 'A001',
    catalogData: {
      id: 'icespear',
      title: '아이스스피어',
      tags: ['magic', 'revered'],
    },
    lastCleaned: '2018-11-01',
  },
  {
    id: 'B002',
    catalogData: {
      id: 'fieball',
      title: '파이어볼',
      tags: ['magic'],
    },
    lastCleaned: '2018-09-01',
  },
  {
    id: 'C003',
    catalogData: {
      id: 'meteor',
      title: '메테오',
      tags: ['magic', 'revered'],
    },
    lastCleaned: '2020-02-01',
  },
]
const scrolls = data.map(
  record => new Scroll(record.id, record.catalogData.title, record.catalogData.tags, dayjs(record.lastCleaned)),
)
scrolls.forEach(scroll => {
  console.log({
    title: scroll.title,
    needsCleaning: scroll.needsCleaning(dayjs()),
    daysSinceLastCleaning: scroll.daysSinceLastCleaning(dayjs()),
    hasRevered: scroll.hasTag('revered'),
  })
})
