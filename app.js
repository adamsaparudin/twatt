const express = require('express');
const bodyParser = require('body-parser');


const app = express()

let indexRoute = require('./routes/index')
let authRoute = require('./routes/auth')

app.use('/', indexRoute)
app.use('/auth', authRoute)

app.listen(3000)
