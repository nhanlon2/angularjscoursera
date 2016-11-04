(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['UserService'];
function UserInfoController(UserService) {
  var userinfo = this;
  userinfo.user = UserService.getUser();
}

})();
