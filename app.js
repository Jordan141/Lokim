const express = require('express')
const app = express()
const throwLog = require('ionic-error-logger')
const chalk = require('chalk')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
const passportBundle = require('./passport.js')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const authenticationRouter = require('./routers/authentication.js')
const config = require('./config/config.js')
const dbAddress = config.backend.dbAddress
const dbUsername = config.backend.dbUsername
const dbPassword = config.backend.dbPassword
const PORT = process.env.PORT || config.backend.port;
const log = console.log
const User = require('./models/user.js');
const emailer = require('./emailer.js')

app.use('/', express.static(`${__dirname}/public`))

const sessionsMiddleware = [
    cookieParser(),
    cookieSession({
        secret: config.backend.sessionsSecretKey,
        maxAge: 1000 * 60 * 15
    }),
    passportBundle.initialize(),
    passportBundle.session(),
    (req,res,next) => {
        if(!req.isAuthenticated()) return res.json({status: '400'})
        next()
    }
]

app.use('/api',
    bodyParser.json(),
    cookieParser(),
    cookieSession({secret: config.backend.sessionsSecretKey}),
    passportBundle.initialize(),
    passportBundle.session(),
    authenticationRouter   
)
app.use('/', (req,res,next) => {
    console.log('Request Url:' + req.url)
    next()
})

app.get('/verify', emailer.verify)
app.get('/send',emailer.send)

mongoose.connect(`mongodb://${dbUsername}:${dbPassword}@${dbAddress}`).then(
    () => {
        throwLog('Init', 'Connected to database', true)
        app.listen(PORT, () => {
            throwLog('Init', 'App is running')
			log(chalk.green('App is running'))
        })
    },
    err => {
        throwLog('Init', 'Database connection issue ' + err, true)
		throw 'Database connection issue ' + err
    }
)