(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/menuapp/templates/menu-categories-listof.template.html',
  bindings: {
    categories: '<categories'
  }
});

})();
