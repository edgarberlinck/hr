const api = require('./github')

exports.listOpenedIssues = async (req, res) => {
  try {
    const openedIssues = await api.getProjectOppenedIssues(req.query.repo)
    res.status(200).send(openedIssues)
  } catch (err) {
    res.status(500).send(err)
  }
  
}