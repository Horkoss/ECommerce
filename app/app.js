'use strict';

// Declare app level module which depends on views, and components
angular.module('EcommerceApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap'
  ])
.controller('MenuCtrl', ["$scope", function($scope) {
  $scope.isCollapsed = true;
}])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
  .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
  .when('/products/men', {
      templateUrl: 'views/product_list.html',
      controller: 'ProductListCtrl',
      controllerAs: 'product_list'
    })
  .when('/products/women', {
      templateUrl: 'views/product_list.html',
      controller: 'ProductListCtrl',
      controllerAs: 'product_list'
    })
  .when('/products/boys', {
      templateUrl: 'views/product_list.html',
      controller: 'ProductListCtrl',
      controllerAs: 'product_list'
    })
  .when('/products/girls', {
      templateUrl: 'views/product_list.html',
      controller: 'ProductListCtrl',
      controllerAs: 'product_list'
    })
  .when('/product/:id', {
      templateUrl: 'views/product_details.html',
      controller: 'ProductDetailsCtrl',
      controllerAs: 'product_details'
    })
  .otherwise({redirectTo: '/'});
}]);
