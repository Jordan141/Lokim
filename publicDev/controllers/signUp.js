module.exports = function ($scope, $http, $location) {
	console.log('signUp.js launched')
	$scope.signUp = function(event) {
		console.log('signUp')
		if(event.which === 13) {
			$http({
				method: 'POST',
				url: '/api/signUp',
				headers: {
					'Content-Type': 'application/json'
				},
				data: {
					username: $scope.username,
					password: $scope.password,
					email: $scope.email
				}
			}).then( response => {
				$location.path('/loginUsername') // path not hash
			})
		}
	}
}