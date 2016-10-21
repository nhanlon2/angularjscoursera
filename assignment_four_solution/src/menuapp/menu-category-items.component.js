(function () {
'use strict';

angular.module('MenuApp')
.component('categoryMenuItems', {
  templateUrl: 'src/menuapp/templates/menu-category-items-listof.template.html',
  bindings: {
    items: '<',
    category: '<'
  }
});

})();
