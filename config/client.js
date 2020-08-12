const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: { accept: 'application/vnd.github.v3+json' }
})

module.exports = instance