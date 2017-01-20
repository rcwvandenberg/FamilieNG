angular.module('familie')
.controller('namenLijstCtrl', function($scope, $http) {
	$scope.achternaam = "van den Berg"
/*
	$http.get('http://localhost:8080/Familie/rest/person/all').
    then(function(response) {
    	alert(response.data)
        $scope.persons = response.data;
    });
*/
});
