(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuItemService'];
function SignUpController(MenuItemService) {
  var signup = this;

  signup.submit = function () {
    var data = MenuItemService.getDataForMenuItem(signup.user.favorite);
    if(data){
      signup.completed = true;
      signup.nosuchmenuitem=false;
    }
    else{
      signup.nosuchmenuitem=true;
    }
  };
}

})();
