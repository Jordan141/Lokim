module.exports = function ($scope, $timeout, $routeParams, $location, login) {

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
	$scope.logInToServer = function () {
		login.logIn()
	}
	
	$scope.changeView = function(){
		$location.path('/loginPassword'); // path not hash
	}
}