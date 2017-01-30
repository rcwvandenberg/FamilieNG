/**
 * 
 */
function activeMenuItem(menuItem) {
	$("#topmenu .active").removeClass("active");
	$("#" + menuItem).addClass("active");

}

function checkPersGeg(id) {
	var y;
	switch (id) {
    case "doopnaam":
    	document.getElementById("foutDoopnaam").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		if (y == null | y == ""){
			document.getElementById("foutDoopnaam").innerHTML = "Doopnaam invullen s.v.p.";
			return "1";
			break;
		}
		document.getElementById(id).value = capitalize(y);
		break;
    case "roepnaam":
    	document.getElementById("foutRoepnaam").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		if (y == null | y == ""){
			document.getElementById("foutRoepnaam").innerHTML = "Roepnaam invullen s.v.p.";
			return "1";
			break;
		}
		document.getElementById(id).value = capitalize(y);
		break;
    case "tussenvoegsel":
    	document.getElementById("foutTussenvoegsel").innerHTML = "";
		y = document.getElementById(id).value.trim();
		document.getElementById(id).value = y.toLowerCase();
		break;
    case "achternaam":
    	document.getElementById("foutAchternaam").innerHTML = "";
    	y = document.getElementById(id).value;
		if (y == null | y == ""){
			document.getElementById("foutAchternaam").innerHTML = "Achternaam invullen s.v.p.";
			return "1";
			break;
		}
		document.getElementById(id).value = capitalizeFirstLetter(y);
		break;
    case "straatnaam":
    	document.getElementById("foutStraatnaam").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		document.getElementById(id).value = capitalizeFirstLetter(y);
		break;
    case "huisnr":
    	document.getElementById("foutHuisnr").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		if (y == null | y == ""){
			break;
		}
		document.getElementById(id).value = y;
		if (isNaN(y)){
			document.getElementById("foutHuisnr").innerHTML = "Huisnummer mag alleen cijfers bevatten.";
			return "1";
			break;
		}
		if (y <= 0) {
			document.getElementById("foutHuisnr").innerHTML = "Huisnummer moet groter zijn dan nul.";
			return "1";
			break;
		}
		break;
    case "huisnrtoev":
		y = document.getElementById(id).value.trim();
		document.getElementById(id).value = y.toUpperCase();
		break;
    case "postcode":
    	document.getElementById("foutPostcode").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		document.getElementById(id).value = y.toUpperCase();
		break;
    case "plaatsnaam":
    	document.getElementById("foutPlaatsnaam").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		document.getElementById(id).value = capitalizeFirstLetter(y);
		break;
    case "staat":
    	document.getElementById("foutStaat").innerHTML = "";
		y = document.getElementById(id).value.trim();
		document.getElementById(id).value = capitalizeFirstLetter(y);
		break;
    case "land":
    	document.getElementById("foutLand").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		document.getElementById(id).value = capitalizeFirstLetter(y);
		break;
    case "telefoon":
    	document.getElementById("foutTelefoon").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		document.getElementById(id).value = y;
		break;
    case "geboortedatum":
    	document.getElementById("foutGeboortedatum").innerHTML = "";
    	y = document.getElementById(id).value;
		if (y == null | y == ""){
			document.getElementById("foutGeboortedatum").innerHTML = "Geboortedatum invullen s.v.p.";
			return "1";
			break;
		}
		break;
    case "geboorteplaats":
    	document.getElementById("foutGeboorteplaats").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		document.getElementById(id).value = capitalizeFirstLetter(y);
		break;
    case "overlijdensdatum":
    	document.getElementById("foutOverlijdensdatum").innerHTML = "";
		break;
    case "email":
    	document.getElementById("foutEmail").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		if (y == null | y == ""){
			break;
		}
		var email = document.forms["persgeg"]["email"].value;
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
			document.getElementById("foutEmail").innerHTML = "Ongeldig e-mail adres.";
			return "1";
			break;
	    }
		document.getElementById(id).value = y;
		break;
    case "password":
    	document.getElementById("foutPassword").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		document.getElementById(id).value = y;
		if (y == null | y == ""){
			break;
		}
		if (y.length < 6)
			{document.getElementById("foutPassword").innerHTML = "Wachtwoord moet minimaal 6 karakters bevatten.";
			return "1";
			break;
		}
		break;
    case "password2":
    	document.getElementById("foutPassword2").innerHTML = "";
    	y = document.getElementById(id).value.trim();
		document.getElementById(id).value = y;
	}
}

function controlePersgeg() {
	var fout = false;
	var overlijdensdatumIngevuld = false;
	var id;
	var geslacht = document.getElementById("geslacht").value;
	var doopnaam = document.getElementById("doopnaam").value;	
	var roepnaam = document.getElementById("roepnaam").value;
	var tussenvoegsel = document.getElementById("tussenvoegsel").value;
	var achternaam = document.getElementById("achternaam").value;
	var straatnaam = document.getElementById("straatnaam").value;
	var huisnr = document.getElementById("huisnr").value;
	var huisnrtoev = document.getElementById("huisnrtoev").value;
	var postcode = document.getElementById("postcode").value;
	var plaatsnaam = document.getElementById("plaatsnaam").value;
	var staat = document.getElementById("staat").value;
	var land = document.getElementById("land").value;
	var telefoon = document.getElementById("telefoon").value;
	var geboortedatum = document.getElementById("geboortedatum").value;
	var geboorteplaats = document.getElementById("geboorteplaats").value;
	var overlijdensdatum = document.getElementById("overlijdensdatum").value;
	if (overlijdensdatum != "" & overlijdensdatum != null){
		overlijdensdatumIngevuld = true;
    	document.getElementById("foutStraatnaam").innerHTML = "";
    	document.getElementById("foutHuisnr").innerHTML = "";
    	document.getElementById("foutHuisnrtoev").innerHTML = "";
    	document.getElementById("foutPostcode").innerHTML = "";
    	document.getElementById("foutPlaatsnaam").innerHTML = "";
    	document.getElementById("foutStaat").innerHTML = "";
    	document.getElementById("foutLand").innerHTML = "";
    	document.getElementById("foutEmail").innerHTML = "";
    	document.getElementById("foutPassword").innerHTML = "";
    	document.getElementById("foutPassword2").innerHTML = "";
	}
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var password2 = document.getElementById("password2").value;
	if (overlijdensdatumIngevuld == false){
	if (checkPersGeg("password2") == "1"){
			id = "password2";
			fout = true;
		}
		if (password2 != password){
			alert("Wachtwoorden ongelijk")
			document.getElementById("foutPassword2").innerHTML = "'Wachtwoord' en 'Herhaal wachtwoord' moeten gelijk zijn.";
			id = "password";
			fout = true;
		}
		if (password2 == null | password2 == ""){
			document.getElementById("foutPassword2").innerHTML = "Wachtwoord herhalen s.v.p.";
			id = "password2";
			fout = true;
		}
		if (checkPersGeg("password") == "1"){
			id = "password";
			fout = true;
		}
		if (password == null | password == ""){
			document.getElementById("foutPassword").innerHTML = "Wachtwoord invullen s.v.p.";
			id = "password";
			fout = true;
		}
		if (password.length < 6)
			{document.getElementById("foutPassword").innerHTML = "Wachtwoord moet minimaal 6 karakters bevatten.";
			id = "password";
			fout = true;
		}
		if (checkPersGeg("email") == "1"){
			id = "email";
			fout = true;
		}
		if (email == null | email == ""){
			document.getElementById("foutEmail").innerHTML = "E-mail adres invullen s.v.p.";
			fout = true;
		}
	}
	if (checkPersGeg("overlijdensdatum") == "1"){
		id = "overlijdensdatum";
		fout = true;
	}
	if (overlijdensdatumIngevuld == true){
		if (overlijdensdatum < geboortedatum) {
			document.getElementById("foutOverlijdensdatum").innerHTML = "Overlijdensdatum moet op of na geboortedatum liggen.";
			id = "overlijdensdatum";
			fout = true;
		}
	}
	if (checkPersGeg("geboorteplaats") == "1"){
		id = "geboorteplaats";
		fout = true;
	}
	if (geboorteplaats == null |geboorteplaats == ""){
		document.getElementById("foutGeboorteplaats").innerHTML = "Geboorteplaats invullen s.v.p.";
		id = "geboorteplaats";
		fout = true;
	}
	if (checkPersGeg("geboortedatum") == "1"){
		id= "geboortedatum";
		fout = true;
	}
	if (overlijdensdatumIngevuld == false){
		if (checkPersGeg("telefoon") == "1"){
			id = "telefoon";
			fout = true;
		}
		if (checkPersGeg("land") == "1"){
			id = "land";
			fout = true;
		}
		if (land == null | land == ""){
			document.getElementById("foutLand").innerHTML = "Land invullen s.v.p.";
			id = "land";
			fout = true;
		}
		if (checkPersGeg("staat") == "1"){
			id = "staat";
			fout = true;
		}
		if ((staat != "" & land == "") | staat != "" & land == "Nederland"){
			document.getElementById("foutStaat").innerHTML = "Staat niet invullen bij 'Nederland'.";
			id = "staat";
			fout = true;
		}
		if (checkPersGeg("plaatsnaam") == "1"){
			id = "plaatsnaam";
			fout = true;
		}
		if (plaatsnaam == null | plaatsnaam == ""){
			document.getElementById("foutPlaatsnaam").innerHTML = "Plaatsnaam invullen s.v.p.";
			id = "plaatsnaam";
			fout = true;
		}
		if (checkPersGeg("postcode") == "1"){
			id = "postcode";
			fout = true;
		};
		if (postcode == null | postcode == ""){
			document.getElementById("foutPostcode").innerHTML = "Postcode invullen s.v.p.";
			id = "postcode";
			fout = true;
		}
		if (checkPersGeg("huisnrtoev") == "1"){
			id = "huisnrtoev";
			fout = true;
		}	
		if (checkPersGeg("huisnr") == "1"){
			id = "huisnr";
			fout = true;
		}
		if (huisnr == null | huisnr == ""){
			document.getElementById("foutHuisnr").innerHTML = "Huisnummer invullen s.v.p.";
			id = "huisnr";
			fout = true;
		}
		if (checkPersGeg("straatnaam") == "1"){
			id = "straatnaam";
			fout = true;
		}
		if (straatnaam == null | straatnaam == ""){
			document.getElementById("foutStraatnaam").innerHTML = "Straatnaam invullen s.v.p.";
			id = "straatnaam";
			fout = true;
		}
	}
	if (checkPersGeg("achternaam") == "1"){
		id = "achternaam";
		fout = true;
	}
	if (checkPersGeg("tussenvoegsel") == "1"){
		id = "tussenvoegsel";
		fout = true;
	}
	if (checkPersGeg("roepnaam") == "1"){
		id = "roepnaam";
		fout = true;
	}
	if (checkPersGeg("doopnaam") == "1"){
		id = "doopnaam";
		fout = true;
	}
	if (fout == true){
		setFocus(id);
		return fout;
	}
	return fout;
}

function setPersgeg() {
	if (controlePersgeg() == true) {
		return;
	}
	var geslacht = document.getElementById("geslacht").value;
	var doopnaam = document.getElementById("doopnaam").value;
	var roepnaam = document.getElementById("roepnaam").value;
	var tussenvoegsel = document.getElementById("tussenvoegsel").value;
	var achternaam = document.getElementById("achternaam").value;
	var straatnaam = document.getElementById("straatnaam").value;
	var huisnr = document.getElementById("huisnr").value;
	var huisnrtoev = document.getElementById("huisnrtoev").value;
	var postcode = document.getElementById("postcode").value;
	var plaatsnaam = document.getElementById("plaatsnaam").value;
	var staat = document.getElementById("staat").value;
	var land = document.getElementById("land").value;
	var telefoon = document.getElementById("telefoon").value;
	var geboortedatum = document.getElementById("geboortedatum").value;
	var geboorteplaats = document.getElementById("geboorteplaats").value;
	var overlijdensdatum = document.getElementById("overlijdensdatum").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 204) {
			alert("Persoon opgeslagen");
		} else if (this.readyState == 4 && this.status == 412) {
			alert("Persoon komt al voor in database");
		}
	}
	xhttp.open("POST", "http://localhost:8080/Familie/rest/person/add", true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify({
		geslacht : geslacht,
		doopnaam : doopnaam,
		roepnaam : roepnaam,
		tussenvoegsel : tussenvoegsel,
		achternaam : achternaam,
		straatnaam : straatnaam,
		huisnr : huisnr,
		huisnrtoev : huisnrtoev,
		postcode : postcode,
		plaatsnaam : plaatsnaam,
		staat : staat,
		land : land,
		telefoon : telefoon,
		geboortedatum : geboortedatum,
		geboorteplaats : geboorteplaats,
		overlijdensdatum : overlijdensdatum,
		email : email,
		password : password
	}));
}

function displayPersgeg(id) {
    $.get("persGeg.html", function(data) {
    	$("#" + "mainpage").html(data);
    });

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			document.getElementById("geslacht").value 	 	  = json.geslacht;
			document.getElementById("doopnaam").value 	 	  = json.doopnaam;
			document.getElementById("roepnaam").value		  = json.roepnaam;
			document.getElementById("tussenvoegsel").value	  = json.tussenvoegsel;
			document.getElementById("achternaam").value		  = json.achternaam;
			document.getElementById("straatnaam").value		  = json.straatnaam;
			document.getElementById("huisnr").value			  = json.huisnr ;
			document.getElementById("huisnrtoev").value		  = json.huisnrtoev;
			document.getElementById("postcode").value		  = json.postcode;
			document.getElementById("plaatsnaam").value		  = json.plaatsnaam;
			document.getElementById("staat").value			  = json.staat;
			document.getElementById("land").value			  = json.land;
			document.getElementById("telefoon").value		  = json.telefoon;
			var arr = json.geboortedatum.split('-');
			var datum = arr[2] + "-" + arr[1] + "-" + arr[0];
			document.getElementById("geboortedatum").value	  = datum;
			document.getElementById("geboorteplaats").value	  = json.geboorteplaats;
			datum = "";
			if (json.overlijdensdatum != ""){
				arr = json.overlijdensdatum.split('-');
				datum = arr[2] + "-" + arr[1] + "-" + arr[0];
			}
			document.getElementById("overlijdensdatum").value = datum;
			document.getElementById("email").value			  = json.email;
			document.getElementById("password").value		  = json.password;
			document.getElementById('opslaan').setAttribute('onclick','updatePersgeg(' + id + ')');
		}
	}
	xhttp.open("GET", "http://localhost:8080/Familie/rest/person/one/" + id, true);
	xhttp.send();
}

function updatePersgeg(id) {
	if (controlePersgeg() == true) {
		return;
	}

	var geslacht = document.getElementById("geslacht").value;
	var doopnaam = document.getElementById("doopnaam").value;
	var roepnaam = document.getElementById("roepnaam").value;
	var tussenvoegsel = document.getElementById("tussenvoegsel").value;
	var achternaam = document.getElementById("achternaam").value;
	var straatnaam = document.getElementById("straatnaam").value;
	var huisnr = document.getElementById("huisnr").value;
	var huisnrtoev = document.getElementById("huisnrtoev").value;
	var postcode = document.getElementById("postcode").value;
	var plaatsnaam = document.getElementById("plaatsnaam").value;
	var staat = document.getElementById("staat").value;
	var land = document.getElementById("land").value;
	var telefoon = document.getElementById("telefoon").value;
	var geboortedatum = document.getElementById("geboortedatum").value;
	var geboorteplaats = document.getElementById("geboorteplaats").value;
	var overlijdensdatum = document.getElementById("overlijdensdatum").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	if (overlijdensdatum != ""){
    	Straatnaam 	= "";
    	Huisnr		= "";
    	Huisnrtoev	= "";
    	Postcode	= "";
    	Plaatsnaam	= "";
    	Staat		= "";
    	Land		= "";
    	Telefoon	= "";
    	Email		= "";
    	Password	= "";
	}
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 204) {
			alert("Persoon bijgewerkt");
		}
	}
	xhttp.open("POST", "http://localhost:8080/Familie/rest/person/update", true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify({
		id : id,
		geslacht : geslacht,
		doopnaam : doopnaam,
		roepnaam : roepnaam,
		tussenvoegsel : tussenvoegsel,
		achternaam : achternaam,
		straatnaam : straatnaam,
		huisnr : huisnr,
		huisnrtoev : huisnrtoev,
		postcode : postcode,
		plaatsnaam : plaatsnaam,
		staat : staat,
		land : land,
		telefoon : telefoon,
		geboortedatum : geboortedatum,
		geboorteplaats : geboorteplaats,
		overlijdensdatum : overlijdensdatum,
		email : email,
		password : password
	}));
}

function namen() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText)
			var text = "";
			for (var i = 0; i < json.length; i++) {
				text += '<option value="' + json[i].id + '"' + '>'
						+ json[i].roepnaam + " " + json[i].tussenvoegsel
						+ " " + json[i].achternaam
						+ "</option>";
			}
			document.getElementById("linkerlijst").innerHTML = text;
			document.getElementById("rechterlijst").innerHTML = text;
		}
	};
	xhttp.open("GET", "http://localhost:8080/Familie/rest/person/all", true);
	xhttp.send();
}

function relatietypes() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText)
			var text = "";
			for (var i = 0; i < json.length; i++) {
				text += '<option value="' + json[i].partner + '"' + '>'
						+ json[i].relationType
						+ "</option>";
			}
			document.getElementById("middellijst").innerHTML = text;
		}
	};
	xhttp.open("GET", "http://localhost:8080/Familie/rest/relationtype/all", true);
	xhttp.send();
}

function setRelation() {
	var doc         = document.getElementById("midden");
	var partner     = doc.value;
	var relatietype = doc.options[doc.selectedIndex].text;
	var person1_id  = document.getElementById("links").value;
	var person2_id  = document.getElementById("rechts").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 204) {
			alert("Relatie opgeslagen");
		}
	}
	xhttp.open("POST", "rest/relation/add/" + partner + "/" + relatietype + "/" + person1_id + "/" + person2_id, true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send();
}

function setFocus(id) {
	var textbox = document.getElementById(id);
	textbox.focus();
	textbox.scrollIntoView();
}

function capitalize(string) {
	str = string.toLowerCase();
	var firstLetterRx = /(^|\s)[a-z]/g;
	return str.replace(firstLetterRx, upperCase);
}
function upperCase(str) {
	return str.toUpperCase();
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
