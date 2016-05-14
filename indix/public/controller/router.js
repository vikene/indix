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
			templateUrl: 'views/final.html',
			controller: 'finalctrl'

		}).
		when('/home/:URLID',{
			templateUrl: 'views/final.html',
			controller:'finalctrl'
		}).
		otherwise({
			redirectTo:'/home'
		});

	}
]);
