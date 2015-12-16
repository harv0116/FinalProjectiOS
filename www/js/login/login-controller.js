angular.module('starter')
 
.controller('LoginCtrl', function($scope, $ionicModal, $timeout, $ionicPopup, $auth, $ionicLoading) {

  //alert("Hello");
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
 
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
	$scope.login();
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  
  $scope.$on("authentication-failed", function() {
	  $auth.logout();
	  $scope.login();
  });
  
  $scope.$on("loader_show", function() {
	  $ionicLoading.show({
		  template: 'Loading...'
	  });
  });
  
  $scope.$on("loader_hide", function() {
	  $ionicLoading.hide();
  });
  
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

	if ($scope.loginData.username == "guest") 
	{
		alert("You may not login with guest");
	} else if ($scope.loginData.password.Length < 5) 
	{
		alert("You must enter a password 5 characters or more");
	} else {
		
		console.log("good user and password");
		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
		  $scope.closeLogin();
		}, 1000);
	}
	
	
  };
  
  
	$scope.authenticate = function(provider){
	
		$auth.authenticate(provider).then(function(){
			$ionicPopup.alert({
				title: 'Success',
				content: 'You have successfully logged in!'
			});
		})
		.catch(function(response){
			$ionicPopup.alert({
				title: 'Error',
				content: response.data ? response.data || response.data.message : response
			});
		});
	
	};
	
	$scope.isAuthenticated = function() {
		return $auth.isAuthenticated();
	}
	
	$scope.logout = function() {
		return $auth.logout();	
	}
	
})