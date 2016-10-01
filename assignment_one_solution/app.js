(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.food = "";

  $scope.checkFood = function () {
    var amountOfFood=calculateFoodAmount($scope.food);
    if(amountOfFood ==0){
      $scope.foodMessage="Please enter data first";
    } else if (amountOfFood <4) {
      $scope.foodMessage="Enjoy!";
    } else {
      $scope.foodMessage="Too much!";
    }

  };
  // will return the amount of food in a comma seperated list, empty strings do not
  // count as food and are ignored
  function calculateFoodAmount(food){
      return $scope.food.split(",").filter(function(elem) {
        return elem.length>0;
    }).length;

  }

}

})();
