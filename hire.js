selectedUnitToHire = "";
numberToHire       =  1; 
function selectObj (myobject) {
	const matches = document.querySelectorAll("img.unit-img");
	for (mi=0;mi<matches.length;mi++){
		matches[mi].style.background="black";
	}
	infoblock = document.getElementById("grid-info"); 
	if (myobject.id==="imgHiringScreenSergeantToHire") {
		document.getElementById("imgHiringScreenSergeantToHire").style.background="yellow";
		infoblock.innerHTML  = localeStrings[308].replace("%arg1", config.sergeantHiring).replace("%arg2", config.sergeantUpkeep);
		infoblock.innerHTML += '<div class="unit-info">\
								<p>Atk.: <span id="sergeantsAttack">5</span></p>\
								<p>Def.: <span id="sergeantsDefence">8</span></p>\
								<p>Dmg: 3-4</p>\
								<p>HP: <span id="sergeantsHealth">15</span></p></div>';
		infoblock.innerHTML += '<input type="range" id="hireNumberRange" value="1" min="1" max="100"\
								oninput="hireNumberValue.value = this.value; numberToHire = this.value ">';
		infoblock.innerHTML += '<input type="text"  id="hireNumberValue" value="1"\
								onchange="hireNumberRange.value=parseInt(this.value); numberToHire=parseInt(this.value)"\
								"value="1"><br>';
		infoblock.innerHTML += '<button onclick="game.hireUnits()">Hire</button>';
		selectedUnitToHire   = "sergeant";
	}
	if (myobject.id==="imgHiringScreenTurkopolToHire") {
		document.getElementById("imgHiringScreenTurkopolToHire").style.background="yellow";
		infoblock.innerHTML  = localeStrings[309].replace("%arg1", config.sergeantHiring).replace("%arg2", config.sergeantUpkeep);
		infoblock.innerHTML += '<div class="unit-info">\
								<p>Atk.: <span id="turkopolsAttack">5</span></p>\
								<p>Def.: <span id="turkopolsDefence">5</span></p>\
								<p>Dmg: 2-3</p>\
								<p>HP: <span id="turkopolsHealth">12</span></p></div>';
		if (game.buildLevelArchery>0){
			infoblock.innerHTML += '<input type="range" id="hireNumberRange" value="1" min="1" max="100"\
									oninput="hireNumberValue.value = this.value; numberToHire = this.value ">';
			infoblock.innerHTML += '<input type="text"  id="hireNumberValue" value="1"\
									onchange="hireNumberRange.value=parseInt(this.value); numberToHire=parseInt(this.value)"\
									"value="1"><br>';
			infoblock.innerHTML += '<button onclick="game.hireUnits()">Hire</button>';
			selectedUnitToHire  = "turkopol";
		} else {
			msg = "<b>%arg1</b>";
			infoblock.innerHTML += msg.replace("%arg1", localeStrings[317]);
		}
	}
	if (myobject.id==="imgHiringScreenKnightToHire") {
		document.getElementById("imgHiringScreenKnightToHire").style.background="yellow";
		infoblock.innerHTML  = localeStrings[310].replace("%arg1", config.sergeantHiring).replace("%arg2", config.sergeantUpkeep);
		infoblock.innerHTML += '<div class="unit-info">\
								<p>Atk.: <span id="knightsAttack">10</span></p>\
								<p>Def.: <span id="knightsDefence">9</span></p>\
								<p>Dmg: 5-10</p>\
								<p>HP: <span id="knightsHealth">20</span></p></div>';
		if (game.buildLevelStables>1){
			infoblock.innerHTML += '<input type="range" id="hireNumberRange" value="1" min="1" max="100"\
									oninput="hireNumberValue.value = this.value; numberToHire = this.value ">';
			infoblock.innerHTML += '<input type="text"  id="hireNumberValue" value="1"\
									onchange="hireNumberRange.value=parseInt(this.value); numberToHire=parseInt(this.value)"\
									"value="1"><br>';
			infoblock.innerHTML += '<button onclick="game.hireUnits()">Hire</button>';
			selectedUnitToHire   = "knight";
		} else {
			msg = "<b>%arg1</b>";
			msg = msg.replace("%arg1",localeStrings[318].replace("%arg1", 2));
			infoblock.innerHTML += msg;
		}
	}
}
function hoverOutObj(myobject) {
	if (myobject.id==="imgHiringScreenSergeantToHire") {
		document.getElementById("imgHiringScreenSergeantToHire").style.transform="scale(1.0)";
	}
	if (myobject.id==="imgHiringScreenTurkopolToHire") {
		document.getElementById("imgHiringScreenTurkopolToHire").style.transform="scale(1.0)";
	}
	if (myobject.id==="imgHiringScreenKnightToHire") {
		document.getElementById("imgHiringScreenKnightToHire").style.transform="scale(1.0)";
	}
}
function hoverInObj(myobject) {
	if (myobject.id==="imgHiringScreenSergeantToHire") {
		//document.getElementById("grid-info").innerHTML=localeStrings[308].replace("%arg1", config.sergeantHiring).replace("%arg2", config.sergeantUpkeep);
		document.getElementById("imgHiringScreenSergeantToHire").style.transform="scale(1.1)";
	}
	if (myobject.id==="imgHiringScreenTurkopolToHire") {
		//document.getElementById("grid-info").innerHTML=localeStrings[309].replace("%arg1", config.turkopolHiring).replace("%arg2", config.turkopolUpkeep);
		document.getElementById("imgHiringScreenTurkopolToHire").style.transform="scale(1.1)";
	}
	if (myobject.id==="imgHiringScreenKnightToHire") {
		//document.getElementById("grid-info").innerHTML=localeStrings[310].replace("%arg1", config.knightHiring).replace("%arg2", config.knightUpkeep);
		document.getElementById("imgHiringScreenKnightToHire").style.transform="scale(1.1)";
	}
}
function updateHeroStatusHire() {
	if ( game.heroExists() === true) {
		if (game.myhero.status===0) {
			if (game.myhero.class===0) {
				document.getElementById("imgHeroInHiringScreenKnight2").style.display="block";
				document.getElementById("imgHeroInHiringScreenMonk2").style.display="none";
			} else {
				document.getElementById("imgHeroInHiringScreenKnight2").style.display="none";
				document.getElementById("imgHeroInHiringScreenMonk2").style.display="block";
			}
			if (game.myhero.sergeants>0) {
				document.getElementById("grid-hero1").style.display="block";
				document.getElementById("grid-hero1v").style.display="block";
			} else {
				document.getElementById("grid-hero1").style.display="none";
				document.getElementById("grid-hero1v").style.display="none";
			}
			if (game.myhero.turkopols>0) {
				document.getElementById("grid-hero2").style.display="block";
				document.getElementById("grid-hero2v").style.display="block";
			} else {
				document.getElementById("grid-hero2").style.display="none";
				document.getElementById("grid-hero2v").style.display="none";
			}
			if (game.myhero.knights>0) {
				document.getElementById("grid-hero3").style.display="block";
				document.getElementById("grid-hero3v").style.display="block";
			} else {
				document.getElementById("grid-hero3").style.display="none";
				document.getElementById("grid-hero3v").style.display="none";
			}
		} else {
			document.getElementById("imgHeroInHiringScreenKnight2").style.display="none";
			document.getElementById("imgHeroInHiringScreenMonk2").style.display="none";
			document.getElementById("grid-hero1").style.display="none";
			document.getElementById("grid-hero1v").style.display="none";
			document.getElementById("grid-hero2").style.display="none";
			document.getElementById("grid-hero2v").style.display="none";
			document.getElementById("grid-hero3").style.display="none";
			document.getElementById("grid-hero3v").style.display="none";
		}
	} else {
		document.getElementById("imgHeroInHiringScreenKnight2").style.display="none";
		document.getElementById("imgHeroInHiringScreenMonk2").style.display="none";
	}
}
function updateGarrisonStatusHire() {
	
}
function updateTroopsNumbers() {
	document.getElementById("lblGarnisonSergeants").innerHTML  = game.sergeants;
	document.getElementById("lblGarnisonTurkopols").innerHTML  = game.turkopols;
	document.getElementById("lblGarnisonKnights").innerHTML    = game.knights;
	if (game.heroExists() === true) {
		document.getElementById("grid-hero1v").innerHTML      = game.myhero.sergeants;
		document.getElementById("grid-hero2v").innerHTML      = game.myhero.turkopols;
		document.getElementById("grid-hero3v").innerHTML      = game.myhero.knights;
	}
}
function updateUnitsStats() {
	document.getElementById("sergeantsAttack").innerText  = sergeantsData.attack;
	document.getElementById("sergeantsDefence").innerText = sergeantsData.defence;
	document.getElementById("sergeantsHealth").innerText  = sergeantsData.health;
	document.getElementById("turkopolsAttack").innerText  = turkopolsData.attack;
	document.getElementById("turkopolsDefence").innerText = turkopolsData.defence;
	document.getElementById("turkopolsHealth").innerText  = turkopolsData.health;
	document.getElementById("knightsAttack").innerText    = knightsData.attack;
	document.getElementById("knightsDefence").innerText   = knightsData.defence;
	document.getElementById("knightsHealth").innerText    = knightsData.health;
}