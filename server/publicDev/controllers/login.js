module.exports = function ($scope, $timeout, $routeParams, $location, login) {

	$scope.logInToServer = function () {
		$scope.alert = false
		login.password = $scope.password
		console.log('login12', login)
		login.logIn()
		.then(response => {
			$location.path('/chat')
		})
		.catch((data, status) => {
			if (status !== 200) {
				$timeout(() => $scope.alert = true)
			}
		})
	}
	
	$scope.changeView = function(){
		login.username = $scope.username
		$location.path('/loginPassword') // path not hash
	}
}