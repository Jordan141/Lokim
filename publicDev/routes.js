module.exports = function ($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: '/templates/login.html',
			controller: 'login'
		})
		.when('/chat', {
			templateUrl: '/templates/chat.html'
		})
}