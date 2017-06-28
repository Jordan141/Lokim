const User = require('../models/user')
const express = require('express')
const router = express.Router()
const throwLog = require('ionic-error-logger')
const passportBundle = require('../passport.js')

router.post('/login', passportBundle.authenticate('local'), (req,res) => {
    res.json({status: 'login success'})
})

router.post('/signUp', (req, res) => {
	const {username, password, email} = req.body
	User.create( {
		username, 
		password, 
		email
	}).then(
		val => res.json({status: 'success'}),
		err => res.json({status: 'failure'})
	)
})

router.post('/logout', (req, res) => {
	req.logout()
	res.json({status: 'success'})
})

module.exports = router