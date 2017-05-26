'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
// Directive pour encapsuler la logique test 
(function() {
  var myApp = angular
    .module('myApp')
    .directive('myDirective', function() {
      return {
        'restrict': 'E',
        'scope': true,
        'controller': 'View1Ctrl',
        'controllerAs': '$ctrl'
      };
    });
})();
// Controller
(function() {
angular
    .controller('View1Ctrl', ['$scope', 'DataService', function($scope, DataService) {
      DataService
        .retrieveData()
        .then(function(data) {
          $scope.visualUserState = data;
        });
    }]);
})();
