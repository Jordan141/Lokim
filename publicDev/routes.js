module.exports = function ($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: '/templates/login.html',
			controller: 'login'
		})
		.when('/', {
			templateUrl: '/templates/login.html',
			controller: 'login'
		})
}