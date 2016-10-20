(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoryItemsController', MenuCategoryItemsController);

MenuCategoryItemsController.$inject = ['categoryMenuItems'];
function MenuCategoryItemsController(categoryMenuItems) {
  var data = this;
  data.categoryMenuItems = categoryMenuItems.data.menu_items;
  data.category= categoryMenuItems.data.category;
}

})();
