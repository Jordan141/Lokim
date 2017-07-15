const User = require('../models/user')
const express = require('express')
const router = express.Router()
const throwLog = require('ionic-error-logger')
const passportBundle = require('../passport.js')

router.post('/login', passportBundle.authenticate('local'), (req,res) => {
	console.log(req.body)
    res.sendStatus(200)
})

router.post('/signUp', (req, res) => {
	const {username, password, email} = req.body
	console.log(req.body, req.params, req.query)
	console.log(username,password,email)
	User.create( {
		username, 
		password, 
		email
	}).then(
		val => res.sendStatus(200),
		err => res.sendStatus(401)
	)
})

router.post('/logout', (req, res) => {
	req.logout()
	res.json({status: '200'})
})

module.exports = router