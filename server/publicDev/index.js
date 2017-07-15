'use strict'
const angular = require('angular')
require('angular-route')

const app = angular.module('lokIM', ['ngRoute'])



app.controller('mainController', ['$scope', function ($scope) {
	$scope.appName = 'LokIM'
}])


app.service('login', ['$http', require('./services/login.js')])

app.directive('contact', function () {
	return {
		templateUrl: './templates/contact.html'
	}
})

app.controller('login', 
	['$scope', '$timeout', '$routeParams', '$location', 'login', require('./controllers/login.js')]
)
app.controller('signUp', 
	['$scope', '$http', '$location', require('./controllers/signUp.js')]
)
app.config(['$routeProvider', require('./routes.js')])


