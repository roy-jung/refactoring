const usd = aNumber =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100)

const withinBand = (usage, bottom, top) => (usage > bottom ? Math.min(usage, top) - bottom : 0)

const baseCharge = usage => {
  if (usage < 0) return usd(0)
  const amount =
    withinBand(usage, 0, 100) * 0.03 + withinBand(usage, 100, 200) * 0.05 + withinBand(usage, 200, Infinity) * 0.07
  return usd(amount)
}

console.log(baseCharge(-1000))
console.log(baseCharge(0))
console.log(baseCharge(1000))
console.log(baseCharge(1500))
