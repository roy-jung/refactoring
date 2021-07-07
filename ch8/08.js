const csvData = `office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Banalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766`

const acquireData = input => {
  const lines = input.split('\n')
  let firstLine = true
  const result = []
  for (const line of lines) {
    if (firstLine) {
      firstLine = false
      continue
    }
    if (line.trim() === '') continue
    const record = line.split(',')
    if (record[1].trim() === 'India') {
      result.push({ city: record[0].trim(), phone: record[2].trim() })
    }
  }
  return result
}
console.log(acquireData(csvData))
