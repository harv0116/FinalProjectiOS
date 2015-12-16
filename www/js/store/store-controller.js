angular.module('starter')

.controller('StoreCtrl', function($scope, $log, GeolocationService, geoLocation, LogService) {
	$scope.data = {
		store: ''
	};
	
	$scope.stores = [];
	
	
	navigator.geolocation.getCurrentPosition(function (position) {
			geoLocation.setGeolocation(position.coords.latitude, position.coords.longitude)
		});

	// begin a watch
	var options = {
		frequency: 1000,
		timeout: 3000,
		enableHighAccuracy: true
	};

	
	$scope.data.coords = geoLocation.getGeolocation();
	
	if ($scope.data.coords) {
	
		GeolocationService.storesearch($scope.data.coords)
		.success(function(data){
			$scope.stores = data.stores;
			$log.info(data);
		})
		.error(function(error){
			$log.error('Best buy API log error');
			LogService.add({
				date: new Date(),
				name: 'Search Failed',
				reason: 'Best buy API log error'
			});
		});
	} else {
		$log.error('Geolocation Coordinates are Empty');
		LogService.add({
				date: new Date(),
				name: 'Geolocation Failed',
				reason: 'Geolocation Coordinates are Empty'
			});
	};	
});