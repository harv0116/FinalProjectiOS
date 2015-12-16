// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter','satellizer','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($authProvider){
	$authProvider.facebook({
		clientId: '641237322646183',
		scope: 'email, public_profile, user_photos, user_friends',
		responseType: 'token'
	});
})

.config(function($httpProvider) {
	$httpProvider.interceptors.push('httpInterceptor');
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
	controller: 'LoginCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('tab.stores', {
      url: '/stores',
      views: {
        'tab-stores': {
          templateUrl: 'templates/tab-stores.html',
          controller: 'StoreCtrl'
        }
      }
    })
    

  .state('tab.logs', {
    url: '/logs',
    views: {
      'tab-logs': {
        templateUrl: 'templates/tab-logs.html',
        controller: 'LogCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/search');

});
