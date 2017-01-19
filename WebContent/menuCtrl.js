angular.module('familie', [])
.controller('menuCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.home = function() {
    	activeMenuItem("home");
    	$http.get("home.html").then(function(response) {
        	$("#" + "mainpage").html(response.data);
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
    	$http.get("http://localhost:8080/Familie/rest/overOns").then(function(response) {
        	$("#" + "mainpage").html(response.data);
        });
    };

    $scope.namenLijst = function() {
		activeMenuItem("namenlijst");
    	$http.get("namenlijst.html").then(function(response) {
        	$("#" + "mainpage").html(response.data);
        });
    };

/*
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
*/
    
	$scope.persGeg = function() {
		activeMenuItem("persoonsgegevens")
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("mainpage").innerHTML = this.responseText;
			}
		};
		xhttp.open("GET", "persGeg.html", true);
		xhttp.send();
    };

	$scope.relaties = function() {
		activeMenuItem("relaties")
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("mainpage").innerHTML = this.responseText;
				namen();
				relatietypes();
			}
		};
		xhttp.open("GET", "relaties.html", true);
		xhttp.send();
    };

	$scope.stamboom = function() {
		activeMenuItem("stamboom");
		$("#" + "mainpage").html("");
	    $.get("http://localhost:8080/Familie/rest/stamboom", function(data) {
	    	$("<div id='stamboompage'></div>").appendTo("#mainpage");
	    	var vorigParentId = 0;
	    	$("<table id='t"
			    	+ vorigParentId
			    	+ "'></table>").appendTo("#stamboompage");
	    	$("</tr><tr id='p" + vorigParentId + "'></tr>").appendTo("#t" + vorigParentId)
			for (var i = 0; i < data.length; i++) {
				if (data[i].parentId != vorigParentId) {
			    	$("<table id='t"
			    	+ data[i].parentId
			    	+ "'></table>").appendTo("#" + data[i].parentId);
			    	$("</tr><tr id='p" + data[i].parentId + "'></tr>").appendTo("#t" + data[i].parentId)
					vorigParentId = data[i].parentId
				}
				$("<td id='"
				+ data[i].id
				+ "'>"
				+ "<h"
				+ data[i].level
				+ ">"
				+ data[i].roepnaam 
				+ " " 
				+ data[i].tussenvoegsel 
				+ " " 
				+ data[i].achternaam
				+ "<br>"
				+ data[i].partnerRoepnaam 
				+ " " 
				+ data[i].partnerTussenvoegsel 
				+ " " 
				+ data[i].partnerAchternaam 
				+ "</h" 
				+ data[i].level
				+ ">"
				+ "</td>").appendTo("#p"
				+ data[i].parentId);
				}
	    })
    };

	$scope.contact = function() {
		activeMenuItem("contact")
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("mainpage").innerHTML = this.responseText;
			}
		};
		xhttp.open("GET", "contact.html", true);
		xhttp.send();
    };

}]);
