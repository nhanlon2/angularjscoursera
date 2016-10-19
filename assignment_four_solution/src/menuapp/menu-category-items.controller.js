(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoryItemsController', MenuCategoryItemsController);

MenuCategoryItemsController.$inject = ['categoryMenuItems'];
function MenuCategoryItemsController(categoryMenuItems) {
  var categoryMenuItems = this;
  categoryMenuItems.categoryMenuItems = categoryMenuItems.data;

}

})();
