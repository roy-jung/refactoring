const setOffAlarms = () => {
  console.warn('악당을 찾았소')
}
const alertForMiscreant = people => {
  for (const p of people) {
    if (p === '조커') {
      setOffAlarms()
      return '조커'
    }
    if (p === '사루만') {
      setOffAlarms()
      return '사루만'
    }
  }
  return ''
}
alertForMiscreant(['슈퍼맨', '배트맨', '아이언맨', '사루만', '블랙위도우', '조커', '스파이더맨'])
