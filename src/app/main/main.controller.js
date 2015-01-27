'use strict';

angular.module('raunchyRob')
  .controller('MainCtrl', function ($scope) {
    $scope.thisYear = new Date().getFullYear();
  });
