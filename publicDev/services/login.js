module.exports = function($http) {
    this.username = 'Username'
	this.password = 'Password'
	this.logIn = () => {
		$http({
			method: 'POST',
			url: '/api/dummy'
		})
	}
}