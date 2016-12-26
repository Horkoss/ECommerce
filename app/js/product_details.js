'use strict';

angular.module('EcommerceApp')
.controller('ProductDetailsCtrl', ["$scope", "$location", function($scope, $location) {
	$scope.id = $location.path().split("/")[2];
}]);