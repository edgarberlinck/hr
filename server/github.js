const client = require('../config/client')
const moment = require('moment')

const { repository } = require('../logic')
const getProjectOppenedIssues = async repoUrl => {
  const { pathname } = repository.resolveProjectNameByURL(repoUrl)

  try {
    const issues = await client.get(`/repos${pathname}/issues`)
      .then(response => response.data)
      .then(issues => issues.filter(issue => issue.state === 'open'))
      const dateToDays = (data) => {
        try {
          const initialData = moment(data)
          return moment().diff(initialData) / (1000*60*60*24)
        } catch {
          return 0
        }
      }
      const totalOpenedIssues = issues.length
      
      const daysOpenedArray = issues.map(({ created_at }) => dateToDays(created_at))
      
      const avg = Math.round(daysOpenedArray.reduce((acc, current) => acc += current, 0) / totalOpenedIssues)
      
      const squareDiffs = daysOpenedArray.map(value => {
        const diff = value - avg
        const sqrDiff = diff * diff
        return sqrDiff
      })
      .reduce((acc, current) => acc += current, 0)
      
      const stdDev = Math.round(Math.sqrt(squareDiffs / totalOpenedIssues))
      
      return { totalOpenedIssues, avg, stdDev }

  } catch (err) {
    throw new Error(err)
  }

}

module.exports = { getProjectOppenedIssues }
