
alert('Bine ați venit la jocul X O !');

const nrRanduri = prompt('Scrieți numărul de rânduri (minim 5).');
const nrColoane = prompt('Scrieți numărul de coloane (minim 5).');
let mutare = 'X';
let tabla = [];

alert('Scopul jocului este să obțineți 5 de X sau de 0 consecutiv în linie, coloană sau diagonală!');

function creareTabel(a, b) {
	for(let i = 0; i < a; i++) {
		let rand = document.createElement('tr');
		document.getElementById('tabel').appendChild(rand);
		tabla[i] = [];
		for(let j = 0; j < b; j++) {
			let coloana = document.createElement('td');
			rand.appendChild(coloana);
			tabla[i][j] = 0;
		}
	}
}

function verificare() {
	
}

function schimba(event){
	let celula = event.target;
	if(celula.tagName === 'TD' && celula.innerText.trim().length === 0)
		{
			celula.innerText = mutare;

			let lin = celula.parentElement.rowIndex;
			let col = celula.cellIndex;
			tabla[lin][col] = mutare;  console.log(tabla);

			if(mutare === 'X') {
				mutare = 'O';
			} else {
				mutare = 'X';
			}
	}
}

creareTabel(nrRanduri, nrColoane);

document.getElementById('tabel').addEventListener('click',schimba);