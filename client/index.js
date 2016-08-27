angular.module('shortly.nav', [])

.controller('NavbarController', function($scope, $location, Links, Auth) {
  $scope.shortenNav = function() {
    $location.path('/links'); 
  }; 
  $scope.viewAllNav = function() {
    $location.path('/shorten'); 
  }; 
}); 