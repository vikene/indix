'use strict'

var vikeneAppControllers = angular.module('vikenAppControllers',[]);

vikeneAppControllers.controller('hctrl',['$scope','$http','$location',function($scope,$http,$location)
                     {
                       $scope.framesrc="0.html";
                       $scope.process = function(){
                         $scope.framesrc ="0.html";
                         $location.url("/home/"+$scope.searchD);
                       }


}]);

vikeneAppControllers.controller('finalctrl', ['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){


//$http.get('/json/'+$routeParams.projectID+'.json').success(function(dud){
	//	$scope.projectID = dud;
	//})
   $scope.framesrc="2.html";
  $scope.process = function(){
    $location.url("/home/"+$scope.searchD);
    location.reload()
  }

  $scope.myexecute= function(){
    var mylist = []
    var final_json='{"fine":{"objects":[';
    console.log(counter)
    for(var i=0;i<counter;i++)
    {
      var o1 = $("#css"+i).val();
      console.log(o1)
      var q1= $("#name"+i).val();
      var att = $("#sel"+i).val();
      if(o1 == null){continue;}
      final_json= final_json + "{";
      final_json = final_json + '"css": "'+o1+'",';
      final_json = final_json + '"attribute": "'+att+'",';
        final_json = final_json + '"summary": "sample",';
      final_json = final_json + '"name": "'+q1+'"';
      if(i+1 != counter)
      {
        final_json = final_json + "},";
      }
      else{
        final_json = final_json + "}";
      }

    }
    final_json= final_json + "]}}";
    final_json = String(final_json);
    final_json = final_json.replace(",]}}","]}}");

    console.log(final_json)
    $http.post('/processData',final_json).success(function(data,status){
      console.log(data);
    })
  }
  var da = $routeParams.URLID;
$http.get('/getnewiframe?urll='+da).success(function(data){
  if(data == 'done!'){
    $scope.searchD=da;
    $scope.framesrc="1.html"

  }
})

}]);
