const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = function () {
  const app = express()
  const hidePoweredBy = require('hide-powered-by')

  app.use(hidePoweredBy({ setTo: 'PHP 4.2.0' }))
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  return app
}
