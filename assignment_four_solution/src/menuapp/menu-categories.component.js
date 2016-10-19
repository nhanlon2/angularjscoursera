(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/menuapp/templates/menu-categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
