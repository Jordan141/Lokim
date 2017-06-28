module.exports = function ($scope, $timeout, $routeParams, login) {

	$scope.$watch('username', function() {
		$timeout( () => {
			login.username = $scope.username
		}	
		, 0)
	})
	$scope.$watch('password', function() {
		$timeout( () => {
			login.username = $scope.username
		}	
		, 0)
	})
	$scope.logInToServer = login.logIn
}