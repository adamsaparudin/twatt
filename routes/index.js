let route = require('express').Router()
let openAuth = require('../helpers/OAuth')

route.get('/', function(req, res) {
  res.send('Hello from the other side')
})

route.get('/twatt/:query', openAuth.searchTwitter)
route.get('/twatt', openAuth.homeTwitter)

module.exports = route
