'use strict'
const angular = require('angular')
require('angular-route')

const app = angular.module('lokIM', ['ngRoute'])



app.controller('mainController', ['$scope', function ($scope) {
	$scope.appName = 'LokIM'
}])