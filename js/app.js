(function () {
    var gem = {
        name: 'Azurite',
        price: 300
    }
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.product = gem;
    });

})();