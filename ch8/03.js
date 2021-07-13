const emitPhotoData = aPhoto =>
  [
    `<p>제목: ${aPhoto.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ].join('\n')

const renderPerson = person =>
  [`<p>${person.name}</p>`, `<img src="${person.photo.url}" />`, emitPhotoData(person.photo)].join('\n')

const photoDiv = p => ['<div>', emitPhotoData(p), '</div>'].join('\n')

const photo = { title: '로이사진', location: '양재천', date: new Date(), url: 'http://abc.com' }
console.log('** renderPerson **\n', renderPerson({ name: '로이', photo }))
console.log('\n** photoDiv **\n', photoDiv(photo))
