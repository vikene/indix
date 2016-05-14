'use strict'

var vikeneAppControllers = angular.module('vikenAppControllers',[]);

vikeneAppControllers.controller('hctrl',['$scope','$http','$location',function($scope,$http,$location)
                     {
                       $scope.process = function(){
                         $location.url("/home/"+$scope.searchD);
                       }


}]);

vikeneAppControllers.controller('finalctrl', ['$scope','$http','$routeParams',function($scope,$http,$routeParams){


//$http.get('/json/'+$routeParams.projectID+'.json').success(function(dud){
	//	$scope.projectID = dud;
	//})
  var da = $routeParams.URLID;
alert(da)

}]);
