(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "Yaakov";
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
  function calculateFoodAmount(food){
    if(food !==""){ //empty string split with ',' returns length of 1
      return $scope.food.split(",").length;
    }
    else {
      return 0;
    }
  }

}

})();
