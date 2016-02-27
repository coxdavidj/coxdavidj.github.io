//Client side verification for sign-in page
function btnSubmit_onclick() {
	var x = document.forms["startForm"]["fName"].value;
	if (x ==null||x=="") {
		alert("First name must be filled out.");
		return false;
	}
	var y = document.forms["startForm"]["lName"].value;
	if (y ==null||y=="") {
		alert("Last name must be filled out.");
		return false;
	}
	var z = document.forms["startForm"]["email"].value;
	if (z ==null||z=="") {
		alert("Email must be filled out.");
		return false;
	}
	var aCode = document.forms["startForm"]["aCode"].value;
	if (aCode!="access") {
		alert("Incorrect access code.");
		return false;	
	}
	if (aCode=="access") {
		window.location="menu.html";
	}
}

//Show selected avatar
function showav12() {
	window.location.href="game.html";
	var img = document.getElementById('av1-2');
	img.style.display=''; 
}
function showav22() {
	var img=document.getElementById('av2-2');
		img.style.display='';
}
function showav32() {
	window.location.href="game.html";
	var img = document.getElementById('av3-2');
	img.style.display=''; 
}
function showav42() {
	window.location.href="game.html";
	var img = document.getElementById('av4-2');
	img.style.display=''; 
}

//Game counters for individual and group choices
var indCount = 0;
var totResp = 0;
function indChoice_onclick() {
	indCount = indCount + 10;
	document.getElementById('indPointsEarned').innerHTML = indCount;
	totResp = totResp + 1;
	document.getElementById('grpRespCount').innerHTML = totResp;
	//Toggle button visbility based on number of group responses.
	var gonei=document.getElementById('indChoice');
	var goneg=document.getElementById('grpChoice');
	if (totResp < 2) {
		gonei.style.display='none';
	}
	if (totResp => 2) {
		goneg.style.display ='';
	}
}
var grpCount = 0;
var indFgrp = 0;
function grpChoice_onclick () {
	grpCount = grpCount + 6;
	document.getElementById('grpPointsEarned').innerHTML = grpCount;
	indFgrp = indFgrp +6/4; 
	document.getElementById('indFromGrp').innerHTML = indFgrp;
	totResp = totResp + 1;
	document.getElementById('grpRespCount').innerHTML = totResp;
	//Toggle button visbility based on number of group responses.
	var gonei=document.getElementById('indChoice');
	var goneg=document.getElementById('grpChoice');
	if (totResp < 2) {
		goneg.style.display='none';
	} 
	if (totResp => 2)  {
		gonei.style.display='';
	}
}
