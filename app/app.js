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
  .otherwise({redirectTo: '/'});
}]);
