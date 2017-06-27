const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express()
const throwLog = require('ionic-error-logger')
const mongoose = require('mongoose')
mongoose.Promise = Promise
const passportBundle = require('./passport.js')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

const config = require('./config/config.json')
const dbAddress = config.backend.dbAddress
const dbUsername = config.backend.dbUsername
const dbPassword = config.backend.dbPassword
const log = console.log

app.use('/', express.static(`${__dirname}/public`))



app.use('/', (req,res,next) => {
    console.log('Request Url:' + req.url)
    next()
})

app.get('/', function(req,res){
    res.render('')
})
app.listen(PORT)