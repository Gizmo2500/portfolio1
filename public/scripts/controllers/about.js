'use strict';

/**
 * @ngdoc function
 * @name portfolio1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolio1App
 */
angular.module('portfolio1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
