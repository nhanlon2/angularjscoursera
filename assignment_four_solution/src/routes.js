(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/menu-categories.template.html',
    controller: 'CategoriesController as listOfCategories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getMenuCategories();
      }]
    }
  })

// Category Menu Items page
.state('categoryMenuItems', {
  url: '/categoryMenuItems/{category}',
  templateUrl: 'src/menuapp/templates/menu-category-items.template.html',
  controller: 'MenuCategoryItemsController as categoryMenuItems',
  resolve: {
    categoryMenuItems: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
      return MenuDataService.getMenuForCategory($stateParams.category);
    }]
  }
})
  ;
}

})();
