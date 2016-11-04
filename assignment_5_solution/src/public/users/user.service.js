(function () {
"use strict";

angular.module('public')
.service('UserService',UserService);


function UserService() {
  var userservice = this;


  userservice.setUser = function (user) {
    userservice.user=user;
  };

  userservice.getUser = function () {
  return user;
  };

}

})();
