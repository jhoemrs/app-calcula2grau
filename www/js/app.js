// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MyCtrl',function($scope){
    	$scope._delta = function(){
        return $scope.b * $scope.b - 4 * $scope.a * $scope.c;
        }
        $scope.delta = function(a, b, c){
        return b*b - 4*a*c;
        }
        $scope.r1 = function(){
        return (-$scope.b + Math.sqrt($scope._delta())) / (2 * $scope.a)
        }
        $scope.r2 = function(){
        return (-$scope.b - Math.sqrt($scope._delta())) / (2 * $scope.a)
        }
    
    $scope.meutexto_reversed = function(){
        return $scope.meutexto.split("").reverse().join("")
    }
})
