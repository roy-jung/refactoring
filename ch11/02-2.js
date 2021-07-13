const usd = aNumber =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100)

const bottomBand = usage => Math.min(usage, 100)
const middleBand = usage => (usage > 100 ? Math.min(usage, 200) - 100 : 0)
const topBand = usage => (usage > 200 ? usage - 200 : 0)
const baseCharge0 = usage => {
  if (usage < 0) return usd(0)
  const amount = bottomBand(usage) * 0.03 + middleBand(usage) * 0.05 + topBand(usage) * 0.07
  return usd(amount)
}
