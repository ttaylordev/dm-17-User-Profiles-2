angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.currentPage;
  $scope.getUsers = function() {
    var promise = mainService.getusers($scope.currentPage);

    promise.then(function(response) {
      $scope.users = response;
    });
  }

  $scope.prev = function() {
    if ($scope.currentPage > 1) {
      $scope.currentPage--;
      $scope.getUsers();
    }
  };
  
  $scope.next = function() {
    if ($scope.total_pages || $scope.total_pages > $scope.currentPage) {
      $scope.currentPage++;
      $scope.getUsers();
    }
  };

  $scope.getUsers();
  
});