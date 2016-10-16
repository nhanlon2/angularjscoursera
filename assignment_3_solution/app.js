(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService).directive('foundItemsList', FoundItemsDirective)
.directive('listItemDetails', ListItemDetails)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItemsList.html',
    scope: {
      foundItems: '<foundItems',
      onRemove: '&onRemove'
    }
  };

  return ddo;
}

function ListItemDetails() {
  var ddo = {
    template: 'name: {{ item.name }}, abbr: {{ item.short_name }}, description: {{ item.description }}'
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm="";

  list.removeItem = function(index){
    list.found.splice(index, 1);
  };

  list.getFound = function(){
    if(!list.searchTerm||list.searchTerm.length===0){
      list.found = [];
    }
    else {
    var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

    promise.then(function (response) {
      list.found = response;
    })
    .catch(function (error) {
      console.log("Error contacting menu items server.");
    });
  }
  }

}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  //returns a promise that will resolve to an array of menu items that contain the search term
  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
        return result.data.menu_items.filter(function(item) {
          return item.description.indexOf(searchTerm)!=-1;
      });
    });

  };

}

})();
