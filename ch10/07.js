const sendAlert = () => console.warn('악당을 찾았소')

const checkForMiscreants = people => {
  let found = false
  for (const p of people) {
    if (!found) {
      if (p === '조커') {
        sendAlert()
        found = true
      }
      if (p === '사루만') {
        sendAlert()
        found = true
      }
    }
  }
}
checkForMiscreants(['슈퍼맨', '배트맨', '아이언맨', '사루만', '블랙위도우', '조커', '스파이더맨'])
