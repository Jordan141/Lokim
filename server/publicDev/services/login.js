/*
	This service stores information about current session.
	Username, password, thumbinal etc.
*/
module.exports = function($http) {
    this.username = 'Username'
	this.password = 'Password'
	this.authenticated = false
	this.logIn = () => {
		return $http({
			method: 'POST',
			url: '/api/login',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				username: this.username,
				password: this.password
			}
		})
	}
}