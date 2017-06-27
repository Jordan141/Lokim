'use strict'

const bootstrap = require('bootstrap-sass')

const angular = require('angular')
require('angular-route')
const app = angular.module('lokIM', ['ngRoute'])



app.controller('mainController', ['$scope', function ($scope) {
	$scope.appName = 'LokIM'
}])