(function () {
    var gems = [
        { name: 'Azurite', price: 2.95 },
        { name: 'Bloodstone', price: 5.95 },
        { name: 'Zircon', price: 3.95 }
    ];
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });
    app.controller('TabController', function () {
       this.tab = 1;
       this.selectedTab = function (curTab) {
            this.tab = curTab;
       }
       this.isSelected = function (checkTab) {
           return this.tab === checkTab;
       }
    });

})();