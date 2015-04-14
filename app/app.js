(function(){
	var app = angular.module('toyStore', ['shopping-cart']);
	
	app.controller('StoreController', ['$http', function($http) {
		var store = this;
		store.products = [];
		
		$http.get('app/products/store-products.json').success(function(data) {
			store.products = data;
			
			//set initial values
			for (var i = 0; i < store.products.length; i++) {
				store.products[i].quantity = 0;
				store.products[i].cartPrice = 0;
				store.products[i].showInfo = false;
			}
			
			store.addTo = function(selected) {
				selected.quantity = selected.quantity +1;
	
				selected.cartPrice = selected.price*selected.quantity;
			};
		
			store.remove = function(selected) {
				selected.quantity = selected.quantity -1;
			
				selected.cartPrice = selected.price*selected.quantity;
			};
		});
				
	}]);
	
})();
