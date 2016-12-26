'use strict';

angular.module('EcommerceApp')
.controller('ProductListCtrl', ["$scope", "$location", function($scope, $location) {
	$scope.category = $location.path().split("/")[2];
	$scope.productsList = [];
	$scope.products = {
		image: ""
	};

    for (var i = 1; i <= 4; i++) {
    	$scope.productsList.push({image: "images/h" + i + ".jpeg", id: i});
    }

    if ($scope.productsList.length > 1) {
    	$scope.product_number = $scope.productsList.length + " products";
    } else {
    	$scope.product_number = "1 product";
    }
}]);