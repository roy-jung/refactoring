const rating = (voyage, history) => {
  // 투자 등급
  const vpf = voyageProfitFactor(voyage, history)
  const vr = voyageRisk(voyage)
  const chr = captainHistoryRisk(voyage, history)
  if (vpf * 3 > vr + chr * 2) return 'A'
  return 'B'
}

const voyageRisk = voyage => {
  // 항해 경로 위험요소
  let result = 1
  if (voyage.length > 4) result += 2
  if (voyage.length > 8) result += voyage.length - 8
  if (['중국', '동인도'].includes(voyage.zone)) result += 4
  return Math.max(result, 0)
}

const hasChina = history => history.some(v => v.zone === '중국')
const captainHistoryRisk = (voyage, history) => {
  // 선장의 항해이력 위험요소
  let result = 1
  if (history.length < 5) result += 4
  result += history.filter(v => v.profit < 0).length
  if (voyage.zone === '중국' && hasChina(history)) result -= 2
  return Math.max(result, 0)
}

const voyageProfitFactor = (voyage, history) => {
  // 수익 요인
  let result = 2
  if (voyage.zone === '중국') result += 1
  if (voyage.zone === '동인도') result += 1
  if (voyage.zone === '중국' && hasChina(history)) {
    result += 3
    if (history.length > 10) result += 1
    if (voyage.length > 12) result += 1
    if (voyage.length > 18) result -= 1
  } else {
    if (history.length > 8) result += 1
    if (voyage.length > 14) result -= 1
  }
  return result
}

const voyage = { zone: '서인도', length: 10 }
const histories = [
  { zone: '동인도', profit: 5 },
  { zone: '서인도', profit: 15 },
  { zone: '중국', profit: -2 },
  { zone: '서아프리카', profit: 7 },
]
const myRating = rating(voyage, histories)
console.log({
  voyageRisk: voyageRisk(voyage),
  captainHistoryRisk: captainHistoryRisk(voyage, histories),
  voyageProfitFactor: voyageProfitFactor(voyage, histories),
  myRating,
})
