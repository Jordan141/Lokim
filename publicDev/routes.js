module.exports = function ($routeProvider) {

	$routeProvider
		.when('/loginUsername', {
			templateUrl: '/templates/loginUsername.html',
			controller: 'login'
		})
		.when('/loginPassword', {
			templateUrl: '/templates/loginPassword.html',
			controller: 'login'
		})
		.when('/chat', {
			templateUrl: '/templates/chat.html'
		})
}