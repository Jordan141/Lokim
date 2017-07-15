module.exports = function ($scope, $http, $location) {
	console.log('signUp.js launched')
	$scope.alert = false
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
			.catch((data, status) => {
				if (status !== 200) {
					$timeout(() => $scope.alert = true)
				}
			})
		}
	}
}