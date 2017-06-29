const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user.js')

passport.use(new LocalStrategy( (username, password, done) =>
    User.findOne({username}, (err, user) => {
        if(err) return done(err)
        if(!user) return done(null ,false, {mesaage: '401 '})
        !User.comparePasswords(user,password).then( isMismatch => {
            if(!isMismatch) return done(null, false, {message: '401 '})
            return done(null, user)
        })
    }))
)

passport.deserializeUser( (id, done) => {
    User.findById(id, (err,user) => {
        done(err,user)
    })
})

passport.serializeUser((user,done) =>
    done(null,user.id)
)

module.exports = passport;