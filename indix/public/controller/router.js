'use strict'

var vikeneApp = angular.module('vikeneApp',[
	'ngRoute',
	'vikenAppControllers'

]);

vikeneApp.config(['$routeProvider',

	function($routeProvider)
	{
		$routeProvider.
		when('/home',{
			templateUrl: 'views/home.html',
			controller: 'hctrl'

		}).
		when('/home/:URLID*',{
			templateUrl: 'views/final.html',
			controller:'finalctrl'
		}).
		otherwise({
			redirectTo:'/home'
		});

	}
]);
