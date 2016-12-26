'use strict';

angular.module('EcommerceApp')
.controller('HomeCtrl', ["$scope", function($scope) {
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  
  $scope.discount = "images/discount.jpg"
  
  $scope.all_category = ["men", "women", "boys", "girls"];
  
/*  $scope.addSlide = function($i) {
    slides.push({
      image: 'images/w' + i + '.jpg',
      id: currIndex++
    });
  };

  for (var i = 1; i < 4; i++) {
    $scope.addSlide(i);
  } */

  $scope.menList = [];
  $scope.products = {
    image: ""
  };

    for (var i = 1; i <= 4; i++) {
      $scope.menList.push({image: "images/h" + i + ".jpeg", id: i});
    }

}]);