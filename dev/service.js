(function(){
  'use strict';
  angular.module('userProfiles').service('mainService', ['$http', function($http) { 
  this.getUsers = function(pageNum) {
    return $http({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=' + pageNum
    }).then(function(response) {
      if (response.status === 200) {
        return response.data;
      }
      return 'ERROR';
    });
  };

}]);
})();
