'use strict'
const angular = require('angular')
require('angular-route')

const app = angular.module('lokIM', ['ngRoute'])



app.controller('mainController', ['$scope', function ($scope) {
	$scope.appName = 'LokIM'
}])

app.controller('login', ['$routeParams', require('./controllers/login.js')])
app.config(['$routeProvider', require('./routes.js')])
