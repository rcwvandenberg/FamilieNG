var app = angular.module("familie", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/overons", {
        templateUrl : "http://localhost:8080/Familie/rest/overOns"
    })
    .when("/namenlijst", {
        templateUrl : "namenlijst.html",
        controller  : "namenlijstCtrl"
    })
    .when("/persoon/:id", {
        templateUrl : "persoon.html",
        controller  : "persoonCtrl"
    })
;
});
app.controller("namenlijstCtrl", function ($scope, $http) {
	$http.get("http://localhost:8080/Familie/rest/person/all")
	.then(function(response) {$scope.persons = response.data});
});
app.controller("persoonCtrl", function ($scope, $http, $routeParams) {
	$http.get("http://localhost:8080/Familie/rest/person/one/" + $routeParams.id)
	.then(function(response) {
		$scope.person = response.data
	});
	$http.get("http://localhost:8080/Familie/rest/relation/" + $routeParams.id)
	.then(function(response) {
		$scope.relatieType = response.data.relatieType
		$http.get("http://localhost:8080/Familie/rest/relation/partner/" + $routeParams.id)
		.then(function(response) {
			$scope.partner = response.data.roepnaam + " " + response.data.tussenvoegsel + " " + response.data.achternaam
		})
	}, 
	function(response) {
		$scope.relatieType = "Ongehuwd"
	});
});
