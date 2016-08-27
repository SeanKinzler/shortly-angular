angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  $scope.init = function() {
    if (Auth.isAuth()) {
      $scope.data = {};
      Links.getAll().then(function(data) {
        $scope.data.links = data;
      }); 
      $scope.search = '';
    } else {
      $location.path('/signin');
    }
  }; 
  $scope.signout = Auth.signout; 
  $scope.changeView = function() {
    $location.path('/shorten');
  };

  $scope.goToLink = function(link) {
    console.log(link); 
    $location.path('/' + link.code);
  }; 

  $scope.init();

});
