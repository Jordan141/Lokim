'use strict'
const angular = require('angular')
require('angular-route')

const app = angular.module('lokIM', ['ngRoute'])



app.controller('mainController', ['$scope', function ($scope) {
	$scope.appName = 'LokIM'
}])


app.service('login', ['$http', require('./services/login.js')])

app.controller('login', 
	['$scope', '$timeout', '$routeParams', '$location', 'login', require('./controllers/login.js')]
)
app.config(['$routeProvider', require('./routes.js')])


