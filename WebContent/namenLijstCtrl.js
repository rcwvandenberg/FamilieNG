angular.module('familie')
.controller('namenLijstCtrl', function($scope, $http) {
	$http.get('http://localhost:8080/Familie/rest/person/all').
    then(function(response) {
    	alert(response.data)
        $scope.persons = response.data;
    });
});
