//Viel hässliches Gedönse. Dies ist dazu da, auf der Submissions-Seite den zugehörigen Dateinamen einzutragen.
	var input = document.getElementById("inputForSubmission");
		input.onchange = e => {
			document.getElementById("labelForFileInput").innerHTML = input.value;
		}
	//Weiterleitung von der Übersicht zum Kurs.
	function redirectToCourse() {
		changeVis("myprojects", false);
		changeVis("currentproject", true);
	}
	//Einige grafische Änderungen an der Oberfläche, wenn das Video "hochgeladen" wird.
	function upload() {
		document.getElementById("statussquare-last").style.visibility = "inherit";
		//document.getElementById("okmodal").modal("show");
		changeVis("nobodyknows", true);	
		redirectToOverview();
	}
	function changeVis(id, isVis) {
		document.getElementById(id).style.visibility = isVis ? "visible" : "hidden";
	}
	function redirectToOverview () {
		changeVis("myprojects", true);
		changeVis("currentproject", false);
	}
	function colorLastTileGreen() {
		console.log("LOl");
		document.getElementById("statussquare-last").style.backgroundColor = "lightgreen";
	}

