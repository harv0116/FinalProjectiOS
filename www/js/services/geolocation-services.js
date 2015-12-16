// JavaScript Document
angular.module('starter')

.factory('GeolocationService',function($http) {
	var bestbuyAPIendPoint = 'http://api.bestbuy.com/v1';
	var key = 'b97c54ucyuzufqj5mqwb8qjc';
	
	return {
		
		storesearch: function(coord) {
			return $http.get(bestbuyAPIendPoint + '/stores(area(' + coord + ',200))?show=storeId,longName,address,city,region,fullPostalCode,country,phone,hours,distance&format=json&apiKey=' + key);
			
		}
	};
})

.factory('geoLocation', function ($localStorage) {
        return {
            setGeolocation: function (latitude, longitude) {
                var _position = {
                    latitude: latitude,
                    longitude: longitude
                }
                $localStorage.setObject('geoLocation', _position)
            },
            getGeolocation: function () {
                return $localStorage.getObject('geoLocation').latitude + ',' + $localStorage.getObject('geoLocation').longitude;
				
            }
           
        }
    })



.factory('$localStorage', ['$window', function ($window) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        }
}]);
