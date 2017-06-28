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
		.when('/signUp', {
			templateUrl: '/templates/signUp.html',
			controller: 'signUp'
		})
		.when('/chat', {
			templateUrl: '/templates/chat.html'
		})
}