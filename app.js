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


const User = require('./models/user.js')
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
        if(!req.isAuthenticated()) return res.json({status: 'Not Logged In'})
        next()
    }
]

app.use('/login',
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

mongoose.connect(`mongodb://${dbUsername}:${dbPassword}@${dbAddress}`).then(
    () => {
        User.create({
            username: 'testUser',
            password: config.backend.testUserPassword,
            email: 'dummyMail@test.com'
        })
        throwLog('Init', 'Connected to database', true)
        app.listen(port, () => {
            throwLog('Init', 'App is running')
			log(chalk.green('App is running'))
        })
    },
    err => {
        throwLog('Init', 'Database connection issue ' + err, true)
		throw 'Database connection issue ' + err
    }
)



app.listen(PORT)