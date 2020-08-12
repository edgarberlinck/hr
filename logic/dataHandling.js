const moment = require('moment')

const dateToDays = (data) => {
  try {
    const initialData = moment(data)
    const today = moment()
    const diff = today.diff(initialData, 'days', true)
    return diff
  } catch (err) {
    console.error(err)
    return 0
  }
}

const calculateRepositoryStatistics = (issues) => {
  const totalOpenedIssues = issues.length
  let avg = 0
  let stdDev = 0
  
  if (totalOpenedIssues > 0) {
    const daysOpenedArray = issues.map(({ created_at }) => dateToDays(created_at))
  
    avg = daysOpenedArray.reduce((acc, current) => acc += current, 0) / totalOpenedIssues
    
    const squareDiffs = daysOpenedArray.map(value => {
      const diff = value - avg
      const sqrDiff = diff * diff
      return sqrDiff
     })
     .reduce((acc, current) => acc += current, 0)
    
    stdDev = Math.round(Math.sqrt(squareDiffs / totalOpenedIssues))
  }
  
  return { totalOpenedIssues, avg, stdDev }
}

module.exports = { calculateRepositoryStatistics }