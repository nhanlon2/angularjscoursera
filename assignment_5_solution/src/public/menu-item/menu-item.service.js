(function () {
"use strict";

angular.module('public')
.service('MenuItemService',MenuItemService);

MenuItemService.$inject = ['$http', 'ApiPath'];
function MenuItemService($http,ApiPath) {
  var menuitemservice = this;
  menuitemservice.basePath = ApiPath;

  menuitemservice.getDataForMenuItem = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiPath + "/menu_items/"+shortName+".json"),
    });

    return response;
  };

}

})();
