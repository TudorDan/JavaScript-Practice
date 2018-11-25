
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

function verificare(lin, col) {
	let m = tabla[lin][col];
	let cellList = [getCell(lin,col)];
	//console.log(cellList);

	//linie
	let nr = 1;
	for(let j = col-1; j>=0 && tabla[lin][j]===m; j--) {
		nr++;
		cellList.push(getCell(lin,j));
	}
	for(let j = col+1; j<nrColoane && tabla[lin][j]===m; j++) {
		nr++;
		cellList.push(getCell(lin,j));
	}
	if(nr>=5) {
		console.log("linie! " + m);
		cellList.forEach((cell,index) => cell.classList.add('highlight'));
	}
}

function getCell(lin, col) {
	let cellList = document.getElementsByTagName('td');
	return cellList[lin*nrRanduri + col];
}

function schimba(event){
	let celula = event.target;
	if(celula.tagName === 'TD' && celula.innerText.trim().length === 0)
		{
			celula.innerText = mutare;

			let lin = celula.parentElement.rowIndex;
			let col = celula.cellIndex;
			tabla[lin][col] = mutare;

			verificare(lin, col);

			if(mutare === 'X') {
				mutare = 'O';
			} else {
				mutare = 'X';
			}
	}
}

creareTabel(nrRanduri, nrColoane);

document.getElementById('tabel').addEventListener('click',schimba);