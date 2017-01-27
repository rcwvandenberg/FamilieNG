var app = angular.module("familie", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        controller  : "homeCtrl"
    })
    .when("/overons", {
        templateUrl : "http://localhost:8080/Familie/rest/overOns",
        controller  : "overonsCtrl"
    })
    .when("/namenlijst", {
        templateUrl : "namenlijst.html",
        controller  : "namenlijstCtrl"
    })
    .when("/persoon/:id", {
        templateUrl : "persoon.html",
        controller  : "persoonCtrl"
    })
    .when("/persgeg", { 
        templateUrl : "persgeg.html", 
//        controller  : "persgegCtrl" 
    }) 
    .when("/relaties", {
        templateUrl : "relaties.html",
        controller  : "relatiesCtrl"
    })
;
});
app.controller("homeCtrl", function ($scope) {
	activeMenuItem("home");
    $("document").ready(function($){
        var nav = $('#menus');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                nav.addClass("f-nav");
            } else {
                nav.removeClass("f-nav");
            }
        });
    })});
app.controller("overonsCtrl", function ($scope, $http) {
	activeMenuItem("overons");
});
app.controller("relatiesCtrl", function ($scope, $http) {
	activeMenuItem("relaties");
	$http.get("http://localhost:8080/Familie/rest/person/all")
	.then(function(response) {$scope.persons = response.data});
	$http.get("http://localhost:8080/Familie/rest/relationtype/all")
	.then(function(response) {$scope.relaties = response.data});
});
app.controller("namenlijstCtrl", function ($scope, $http) {
	activeMenuItem("namenlijst");
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
