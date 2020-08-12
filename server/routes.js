const router = require('express').Router()

const controller = require('./controller')

router.get('/issues', controller.listOpenedIssues)

module.exports = router