angular.module('starter')

.controller('SearchCtrl', function($scope, $log, $rootScope, BestBuyService, LogService) {
	$scope.data = {
		search: ''
	}
	
	$scope.products = [];
		
	$scope.search = function(term) {
		
		if (term) {
		
			BestBuyService.search(term)
			.success(function(data){
				$scope.products = data.products;
				$log.info(data);
			})
			.error(function(error){
				LogService.add({
				date: new Date(),
				name: 'Best Buy API Failed',
				reason: 'Best buy API log error'
			});
				$log.error('Best buy API log error');
				
			});
		} else {
			LogService.add({
				date: new Date(),
				name: 'Search Failed',
				reason: 'Search term is Empty'
			});
			$log.error('Search term is Empty');
		}	
	}
	});

