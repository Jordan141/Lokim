module.exports = function ($scope, $timeout, $routeParams, $location, login) {

	$scope.logInToServer = function () {
		
		login.password = $scope.password
		console.log('login9', login)
		login.logIn()
		.then(response => {
			console.log(response)
			$location.path('/chat')
		})
	}
	
	$scope.changeView = function(){
		login.username = $scope.username
		$location.path('/loginPassword') // path not hash
	}
}