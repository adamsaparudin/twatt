let route = require('express').Router()
let OAuth = require('oauth');
let https = require('https')
// let apiTwitter = require('')


route.get('/', function(req, res) {
  res.send('Hello from the auth side')
})



module.exports = route
