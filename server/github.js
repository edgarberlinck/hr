const client = require('../config/client')

const { repository } = require('../logic')

const getRepositoryIssues = async repoUrl => {
  const { pathname } = repository.resolveProjectNameByURL(repoUrl)

  try {
    const issues = await client.get(`/repos${pathname}/issues`)
      .then(response => response.data)
      .then(issues => issues.filter(issue => issue.state === 'open'))

      return issues
  } catch (err) {
    throw new Error(err)
  }

}

module.exports = { getRepositoryIssues }
