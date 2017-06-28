let username, password

module.exports = function($http) {
    this.username = 'Username'
	this.password = 'Password'
	this.authenticated = false
	this.updateUsername = passedUsername => username = passedUsername
	this.updatePassword = passedPassword => password = passedPassword
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