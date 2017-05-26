'use strict';
var myApp = angular.module('myApp')
.service("ravensService", function ($http,$q){
var deffered = $q.defer();
$http.get('../data.json').success(function (data){
	deffered.resolve(data);
});
   this.getData = function(){
   	return deffered.promise;
   }
})


// partie extèrne
