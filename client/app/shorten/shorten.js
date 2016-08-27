angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  if (Auth.isAuth()) {
    $scope.link = {}; 
    $scope.addLink = function(newLink) {
      Links.addOne(newLink);
      $scope.url = '';
    };
    $scope.signout = Auth.signout;
    $scope.changeView = function() {
      $location.path('/links');
    };
  } else {
    $location.path('/signin'); 
  }
});
