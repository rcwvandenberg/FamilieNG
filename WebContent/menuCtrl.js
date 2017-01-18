angular.module('familie', [])
.controller('menuCtrl', ['$scope', function($scope) {

	$scope.home = function() {
    	activeMenuItem("home");
        $.get("home.html", function(data) {
        	$("#" + "mainpage").html(data);
        });

        /* menubalk aan de bovenkant van het scherm fixeren */
        $("document").ready(function($){
            var nav = $('#menus');

            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    nav.addClass("f-nav");
                } else {
                    nav.removeClass("f-nav");
                }
            });
        });
    };

	$scope.overOns = function() {
		activeMenuItem("overons");
	    $.get("http://localhost:8080/Familie/rest/overOns", function(data) {
	    	$("#" + "mainpage").html(data);
	    });
    };

	$scope.namenLijst = function() {
		activeMenuItem("namenlijst")
	    $.getJSON("http://localhost:8080/Familie/rest/person/all", function(data) {
			var text = '<table id="namen">';
			text += "<tr class='namentr'><th class='namenth'>Naam</th><th class='namenth'>Geboortedatum</th></tr>";
			for (var i = 0; i < data.length; i++) {
				text += '<tr class="namentr"><td class="namentd"' + i % 2 + '">'
						+ '<a href="#" onclick="persoon(' + data[i].id + ')"'
						+ '>' + data[i].roepnaam + " " + data[i].tussenvoegsel
						+ " " + data[i].achternaam + "</a></td>";
				text += "<td class='namentd'>" + data[i].geboortedatum + "</td></tr>";
			}
			text += "</table>";
	    	$("#" + "mainpage").html(text);
	    });
    };

}]);
