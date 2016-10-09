(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyCtrl', ToBuyCtrl).controller('AlreadyBoughtCtrl', AlreadyBoughtCtrl)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyCtrl.$inject = ['ShoppingListCheckOffService'];
  function ToBuyCtrl(ShoppingListCheckOffService) {
    var ToBuyController=  this;
    ToBuyController.itemsToBuy=ShoppingListCheckOffService.getItemsToBuy();
    ToBuyController.buy=function(itemIndex){
      ShoppingListCheckOffService.moveItemToBought(itemIndex);
    }
  }

  AlreadyBoughtCtrl.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtCtrl(ShoppingListCheckOffService){
    var AlreadyBoughtController=this;
    AlreadyBoughtController.boughtItems=ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var boughtItems = [];
    var itemsToBuy =  [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Eggs",
        quantity: "5000"
      }
    ];

    service.moveItemToBought = function (itemIdex) {
      var movingItem = itemsToBuy[itemIdex];
      itemsToBuy.splice(itemIdex, 1);
      boughtItems.push(movingItem);
    };

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };
    service.getBoughtItems = function(){
      return boughtItems;
    }
  }



})();
