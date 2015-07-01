'use strict';

/**
 * @ngdoc function
 * @name portfolio1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolio1App
 */
angular.module('portfolio1App')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Weedman'
    ];
  });