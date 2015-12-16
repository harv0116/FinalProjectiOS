angular.module('starter')

.controller('LogCtrl', function($scope, LogService) {
  
  $scope.data = {};
  /*
  if (LogService.get('LogList')) {
		$scope.logs = LogService.getStorageList('LogList');
	} 
  
  $scope.addLog = function() {
		$scope.logs.push($scope.data.log);
		LogService.set('LogList',$scope.logs);
		
	}
	*/
});
