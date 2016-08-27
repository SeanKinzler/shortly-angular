angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  $scope.init = function() {
    if (Auth.isAuth()) {
      $scope.data = {};
      Links.getAll().then(function(data) {
        $scope.data.links = data;
      }); 
    } else {
      $location.path('/signin');
    }
  }; 
  $scope.signout = Auth.signout; 
  $scope.changeView = function() {
    $location.path('/shorten');
  };

  $scope.init();

});
