const previousDateFromNow = days => new Date(Date.now() - 1000 * 60 * 60 * 24 * days)
const recentDateCutoff = () => previousDateFromNow(3)

const renderPhoto = (outStream, aPhoto) => {
  outStream.write(`<img src="${aPhoto.url}" />`)
}
const emitPhotoData = (outStream, photo) => {
  outStream.write(`<p>제목: ${photo.title}</p>`)
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>`)
  outStream.write(`<p>위치: ${photo.location}</p>`)
}
const listRecentPhotos = (outStream, photos) => {
  photos
    .filter(p => p.date > recentDateCutoff())
    .forEach(p => {
      outStream.write('<div>\n')
      emitPhotoData(outStream, p)
      outStream.write('</div>\n')
    })
}
const renderPerson = (outStream, person) => {
  outStream.write(`<p>${person.name}</p>\n`)
  renderPhoto(outStream, person.photo)
  emitPhotoData(outStream, person.photo)
}

const photos = [
  { title: '로이사진1', location: '양재천', date: previousDateFromNow(0), url: 'http://abc.com/1' },
  { title: '로이사진2', location: '홍대', date: previousDateFromNow(1), url: 'http://abc.com/2' },
  { title: '로이사진3', location: '이태원', date: previousDateFromNow(2), url: 'http://abc.com/3' },
  { title: '로이사진4', location: '판교', date: previousDateFromNow(3), url: 'http://abc.com/4' },
  { title: '로이사진5', location: '이태원', date: previousDateFromNow(4), url: 'http://abc.com/5' },
  { title: '로이사진6', location: '강남', date: previousDateFromNow(5), url: 'http://abc.com/6' },
  { title: '로이사진7', location: '탄천', date: previousDateFromNow(6), url: 'http://abc.com/7' },
  { title: '로이사진8', location: '잠실새내', date: previousDateFromNow(7), url: 'http://abc.com/8' },
]
const outstream = {
  res: '',
  write(text) {
    this.res += text
  },
}
outstream.write('** renderPerson **\n')
renderPerson(outstream, { name: '재남', photo: photos[0] })
outstream.write('\n\n** listRecentPhotos **\n')
listRecentPhotos(outstream, photos)
console.log(outstream.res)
