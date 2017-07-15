const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const userSchema = new Schema({
    username: {type: String, required: true, validate: /^[a-zA-Z0-9+]*$/, index: {unique: true}},
    password: {type: String, required: true},
    email: {type:String, required: true, validate: /^[a-zA-Z0-9_@.]*$/, index: {unique: true}},
    creationDate: {type: String, required: true},
    authenticated: {type: String,required: true}
})
userSchema.statics.comparePasswords = function(user, candidatePassword) {
    return new Promise((resolve, reject) =>
    bcrypt.compare(candidatePassword, user.password, function(err, isMismatch){
        if(err) return reject(err)
        resolve(isMismatch)
    })
    )
}

userSchema.pre('validate', function(next){
    const user = this
    if(user.isNew) {
        user.creationDate = new Date()
        user.authenticated = false
    }
    next()
})

userSchema.pre('save', function(next) {
    const user = this
    if(!user.isModified('password')) return next()
    //hashing password
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password,salt, function(err,hash){
            if(err) return next(err)
            user.password = hash;
            next()
        })
    })
})

const User = mongoose.model('User', userSchema)

module.exports = User