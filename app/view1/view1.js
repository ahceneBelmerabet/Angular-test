'use strict';
'use lodash';
var myApp = angular.module('myApp.view1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

myApp.controller('View1Ctrl',function($scope, ravensService,chartService) {
    // controlleur pour appeler les service de récupération de données et d'affichage de l'histogramme
    var promise = ravensService.getData();
    promise.then(function(data){
        const date = data.date;
        const metric = data.metric;
        const output = _.map(data,(date,metric)=>({ date, metric }));
        $scope.output = data;
        console.log(data);
        $scope.histo = function(){
        var promise = chartService.buildChart(data);
      }
    })
      
});

//directive pour encapsuler la logique
(function() {
  angular
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
