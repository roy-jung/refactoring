const sendAlert = p => console.warn('악당을 찾았소', p)

const checkForMiscreants = people => {
  const p = people.find(p => ['조커', '사루만'].includes(p))
  if (p) sendAlert(p)
}
checkForMiscreants(['슈퍼맨', '배트맨', '조커', '아이언맨', '사루만', '블랙위도우', '스파이더맨'])
