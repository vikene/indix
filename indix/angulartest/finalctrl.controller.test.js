describe('Final Controller TEST', function () {

  beforeEach(module('vikeneApp1'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Final Ctrl', function () {
		it('Process function check', function () {
			var $scope = {};
			var controller = $controller('finalctrl', { $scope: $scope });
      $scope.searchD = "https://google.com/"
			$scope.process();
			expect($scope.url).toBe("/home/https://google.com/");
		});
    it('Initial frame check',function(){
      var $scope = {};
			var controller = $controller('finalctrl', { $scope: $scope });
      expect($scope.framesrc).toBe("2.html");
    })
    it('final frame Check',function(){
      var $scope = {};
			var controller = $controller('finalctrl', { $scope: $scope });
      $scope.data="done!"
      $scope.afterget();
      expect($scope.framesrc).toBe("1.html");
    })
    it('final frame fail Check',function(){
      var $scope = {};
			var controller = $controller('finalctrl', { $scope: $scope });
      $scope.data="nope"
      $scope.afterget();
      expect($scope.framesrc).toBe("2.html");
    })
    it('generator check',function(){
      var $scope={};
      var controller = $controller('finalctrl',{$scope:$scope});
      $scope.myexecute();
      expect($scope.final_json).toBe('{"fine":{"objects":[{"css": "sam","attribute": "ss","summary": "sample","name": "value"}]}}')

    })

	});

});
