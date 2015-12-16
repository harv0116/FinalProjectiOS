// JavaScript Document

angular.module('starter')
.factory('BestBuyService',function($http) {
	var bestbuyAPIendPoint = 'http://api.bestbuy.com/v1';
	var key = 'b97c54ucyuzufqj5mqwb8qjc';
	
	
	return {
		
		search: function(term) {
			return $http.get(bestbuyAPIendPoint + '/products((search='+ term + '))?show=name,sku,salePrice,image&format=json&apiKey='+ key);	
		}
	};
});
	