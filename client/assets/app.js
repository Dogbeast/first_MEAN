var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './../partials/new.html'
		})
		.when('/show/:id', {
			templateUrl: './../partials/show.html'
		})
		.when('/edit/:id', {
			templateUrl: './../partials/edit.html'
		})
		.when('/create', {
			templateUrl: './../partials/create.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});