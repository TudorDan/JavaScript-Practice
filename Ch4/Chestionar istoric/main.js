alert("Bine ați venit la chestionarul despre Evul Mediu Timpuriu (numit și Întunecat)!");

const chestionar = [
	["Ce an este reperul pentru finalul Antichității și debutul Evului Mediu?", "476"],
	["Cine a fost ultimul comandant roman (magister militum) care a condus centrul Galiei (Franța actuală) după prăbușirea Imperiului Roman de Apus (464-486 d.Hr.)?", "Syagrius"],
	["Care neam migrator a ocupat Italia după prăbușirea Imperiului Roman de Apus? (răspunsul la plural, articulat)", "ostrogoții"],
	["Care neam migrator a învins pe vizigoți in bătălia de la Vouillé (507 d.Hr.), forțându-i să se retragă în Spania? (răspunsul la plural, articulat)", "francii"],
	["Cine a fost generalul roman de răsărit (bizantin) care a cucerit Italia (535-554 d.Hr.)?", "Belisarie"],
	["Care neam migrator, fugind de frica avarilor, a năvălit în Italia din 568 d.Hr.? (răspunsul la plural, articulat)", "longobarzii"]
];

function incepe(chestionar) {
	let punctaj = 0; // punctajul inițial

	//Instrucțiunea principală a jocului
	for(let [intrebare, raspunsCorect] of chestionar) {
		let replicaUtilizatorului = interogheaza(intrebare);
		verifica(replicaUtilizatorului, raspunsCorect);
	}

	//Finalul instrucțiunii principale a jocului

	sfarsitJoc();

	//declarațiile funcțiilor
	function interogheaza(intrebare) {
		return prompt(intrebare);
	}

	function verifica(replicaUtilizatorului, raspunsCorect) {
		if(replicaUtilizatorului === raspunsCorect) {
			alert("Corect!");
			punctaj++;
		} else {
			alert(`Greșit! Răspunsul corect era: ${raspunsCorect}.`);
		}
	}

	function sfarsitJoc() {
		alert(`Sfârșitul chestionarului, ai un scor de ${punctaj} punct${punctaj !== 1 ? "e" : ""}!`);
	}
}

incepe(chestionar);
