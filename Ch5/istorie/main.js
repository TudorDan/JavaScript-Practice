alert('Bine ati venit la chestionarul despre crearea statului român (Unirea Mică)!');

const chestionar = [
	{ cerinta: "Numiți războiul (1853-1856) în urma căruia armata rusă s-a retras din Moldova și Țara Românească, favorizând apariția statului român.", raspunsCorect: "Războiul Crimeii" },
	{ cerinta: "Numiți o mare putere care a luptat alături de Imperiul Otoman și Franța împotriva Rusiei în Războiul Crimeii.", raspunsCorect: "Marea Britanie" },
	{ cerinta: "Numiți capitala europeană unde s-a desfășurat congresul și s-a semnat trataul de pace care a finalizat Războiul Crimeii (1856)", raspunsCorect: "Paris" },
	{ cerinta: "Răspundeți cu adevărat sau fals în privința poziției Marii Britanii la Congresul de Pace de la Paris(1856): Anglia se opunea formării statului român (unirea Moldovei cu Țara Românească) deoarece considera că România se va alia cu Rusia împotriva Imperiului Otoman.", raspunsCorect: "adevărat" },
	{ cerinta: "Numiți marea putere cu care s-a aliat statul român în timpul razboiului desfășurat în Balcani între 1877-1878.", raspunsCorect: "Rusia" },
];

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
		const raspunsUtilizator = prompt(intrebare);
		this.verifica(raspunsUtilizator);
	},

	verifica(raspunsUtilizator) {
		const solutie = this.intrebare.raspunsCorect;
		if(raspunsUtilizator === solutie) {
			alert("Corect!");
			this.punctaj++;
		} else {
			alert(`Greșit! Răspunsul corect era: ${solutie}.`);
		}
	},

	sfarsitJoc() {
		alert(`Sfârșitul chestionarului, ai un scor de ${this.punctaj} punct${this.punctaj !== 1 ? "e" : ""}.`);
	}
}

joc.start(chestionar);