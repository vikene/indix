describe('Home Controller TEST', function () {

  beforeEach(module('vikeneApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Home Ctrl', function () {
		it('Process function check', function () {
			var $scope = {};
			var controller = $controller('hctrl', { $scope: $scope });

			$scope.process();
			expect($scope.framesrc).toBe("0.html");
		});
    it('Initial frame check',function(){
      var $scope = {};
			var controller = $controller('hctrl', { $scope: $scope });
      expect($scope.framesrc).toBe("0.html");
    })
	});

});
