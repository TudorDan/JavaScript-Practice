const chestionar = [
	{ cerinta: 'Care țară a emis prima declarație de război?', raspunsCorect: 'Austro-Ungaria'},
	{ cerinta: 'În ce oraș a fost asasinat arhiducele Franz Ferdinand?', raspunsCorect: 'Sarajevo' },
	{ cerinta: 'Atacul german asupra cărei țări a provocat direct intrarea Marii Britanii în război?', raspunsCorect: 'Belgia' },
	{ cerinta: 'Ce țară a provocat eșecul planurilor de război germane în 1914?', raspunsCorect: 'Rusia' },
];

//Obiectul de vedere
const vedere = {
	punctaj: document.querySelector('#punctaj strong'),
	intrebare: document.getElementById('intrebare'),
	rezultat: document.getElementById('rezultat'),
	informatie: document.getElementById('informatie'),
	incepe: document.getElementById('incepe'),
	render(tinta, continut, atribute) {
		for(const cheie in atribute) {
			tinta.setAttribute(cheie, atribute[cheie]);
		}
		tinta.innerHTML = continut;
	},
	arata(elementul) {
		elementul.style.display = 'block';
	},
	ascunde(elementul) {
		elementul.style.display = 'none';
	}
}

//Obiectul de joc
const joc = {
	start(chestionar) {
		this.punctaj = 0;
		this.intrebari = [...chestionar];
		vedere.ascunde(vedere.incepe);

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
			vedere.render(vedere.rezultat, `Greșit! Răspunsul corect era: ${solutie}.`, {'class': 'gresit'});
			alert(`Greșit! Răspunsul corect era: ${solutie}.`);
		}
	},

	sfarsitJoc() {
		vedere.render(vedere.informatie, `Sfârșitul chestionarului, ai un scor de ${this.punctaj} punct${this.punctaj !== 1 ? 'e' : ''}.`);
		vedere.arata(vedere.incepe);
	}
}

vedere.incepe.addEventListener('click', () => joc.start(chestionar), false);