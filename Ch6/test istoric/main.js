const chestionar = [
	{ cerinta: 'Care general (\'strateg\') este considerat, tradițional, învigătorul perșilor în Bătălia de la Maraton?', raspunsCorect: 'Miltiade'},
	{ cerinta: 'Cine a fost adevăratul general șef (\'strateg polemarh\'), conform cercetărilor recente?', raspunsCorect: 'Callimachus din Aphidna' },
	{ cerinta: 'Numiți istoricul care a scris despre bătălie și era prieten cu generalul Cimon, fiul lui Miltiade.', raspunsCorect: 'Herodot' },
	{ cerinta: 'Răspundeți cu adevărat sau fals dacă polemarhul Callimachus - ucis în luptă la Maraton - a avut urmași care să-i pastreze memoria.', raspunsCorect: 'fals' },
];

//Obiectul de vedere
const vedere = {
	punctaj: document.querySelector('#punctaj strong'),
	intrebare: document.getElementById('#intrebare'),
	rezultat: document.getElementById('rezultat'),
	informatie: document.getElementById('informatie'),
	render(tinta, continut, atribute) {
		for(const cheie in atribute) {
			tinta.setAttribute(cheie, atribute[cheie]);
		}
		tinta.innerHTML = continut;
	}
}

//Obiectul de joc
const joc = {
	start(chestionar) {
		this.intrebari = [...chestionar];
		this.punctaj = 0;

		//Principala instrucțiune a jocului
		for(const intrebare of this.intrebari) {
			this.intrebare = intrebare;
			this.interogheaza();
		}
		//Sfârșitul principalei instrucțiuni a jocului

		this.sfarsitJoc();
	},

	interogheaza() {
		const intrebare = `${this.intrebare.cerinta}`;
		vedere.render(vedere.intrebare, intrebare);
		const raspunsUtilizator = prompt(intrebare);
		this.verifica(raspunsUtilizator);
	},

	verifica(raspunsUtilizator) {
		const solutie = this.intrebare.raspunsCorect;
		if(raspunsUtilizator === solutie) {
			vedere.render(vedere.rezultat, 'Corect!', {'class': 'corect'});
			alert("Corect!");
			this.punctaj++;
			vedere.render(vedere.punctaj, this.punctaj);
		} else {
			vedere.render(vedere.rezultat, `Greșit! Răspunsul corect era ${solutie}`, {'class': 'gresit'});
			alert(`Greșit! Răspunsul corect era: ${solutie}.`);
		}
	},

	sfarsitJoc() {
		vedere.render(vedere.informatie, `Sfârșitul chestionarului, ai un scor de ${this.punctaj} punct${this.punctaj !== 1 ? 'e' : ''}.`);
	}
}

joc.start(chestionar);