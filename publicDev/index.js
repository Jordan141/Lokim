'use strict'
const angular = require('angular')
require('angular-route')

const app = angular.module('lokIM', ['ngRoute'])



app.controller('mainController', ['$scope', function ($scope) {
	$scope.appName = 'LokIM'
}])


app.service('login', ['$http', function($http) {
    this.username = 'Username'
	this.password = 'Password'
	this.logIn = () => {
		$http({
			method: 'POST',
			url: '/api/dummy'
		})
	}
}])

app.controller('login', 
	['$routeParams', 'login', require('./controllers/login.js')]
)
app.config(['$routeProvider', require('./routes.js')])


