(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuItemService','UserService'];
function SignUpController(MenuItemService,UserService) {
  var signup = this;

  signup.submit = function () {
    var promise = MenuItemService.getDataForMenuItem(signup.user.favorite);
    var menuitemdata;
    promise.then(function (response) {
      menuitemdata = response.data;
      if(menuitemdata){
        signup.completed = true;
        signup.nosuchmenuitem=false;
        signup.user.menuitemdata=menuitemdata;
        UserService.setUser(signup.user);
      }
      else{
        signup.nosuchmenuitem=true;
      }
    })
    .catch(function (error) {
      console.log("Error contacting menu items server.");
      signup.nosuchmenuitem=true;
    });
  };
}

})();
