
'use strict'

angular.module('vikeneApp1',[]).controller('finalctrl',function($scope)
                     {
                       $scope.framesrc="2.html";
                      $scope.process = function(){
                        $scope.url="/home/"+$scope.searchD;
                        //location.reload()
                      };

                     $scope.myexecute= function(){
                        var mylist = []
                        var final_json='{"fine":{"objects":[';


                          var o1 = "sam";

                          var q1= "value";
                          var att = "ss";

                          final_json= final_json + "{";
                          final_json = final_json + '"css": "'+o1+'",';
                          final_json = final_json + '"attribute": "'+att+'",';
                            final_json = final_json + '"summary": "sample",';
                          final_json = final_json + '"name": "'+q1+'"';

                            final_json = final_json + "}";
                          


                        final_json= final_json + "]}}";
                        final_json = String(final_json);
                        final_json = final_json.replace(",]}}","]}}");
                        console.log(final_json)
                          $scope.final_json = final_json;
                      }
                      $scope.data;
                    $scope.afterget = function(data){
                      if($scope.data == 'done!'){

                        $scope.framesrc="1.html"

                      }
                    }


});
