(function(){

	var app = angular.module('shopping-cart', []);
	
	app.directive('shoppingCart', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/cart/cartView.html'
		};
	});
	
	app.filter('sum', function () {
  		return function (items) {
  			var sum = 0;
  			var total = [];
  			var lastArray = [];
  			
  			//add together all cartPrice values and place them in array
  			for (var i = 0; i < items.length; i++) {
  				myCart = items[i].cartPrice;  				
  				sum += myCart; 								
  				items.cartPrice = sum;
  				total.push(items.cartPrice);
  			}
  			
  			//Place last value in new array so only last value is shown on page
  			var last = total[total.length - 1]
  			lastArray.push(last);
    			
    		return lastArray;
 	 	};
	});
	
})();	
