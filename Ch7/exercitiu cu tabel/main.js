
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

	//linie orizontală
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
		puncteaza(m, cellList);
	}

	//linie verticală
	nr = 1;
	cellList = [getCell(lin,col)];
	for(let i = lin-1; i>=0 && tabla[i][col]===m; i--) {
		nr++;
		cellList.push(getCell(i,col));
	}
	for(let i = lin+1; i<nrRanduri && tabla[i][col]===m; i++) {
		nr++;
		cellList.push(getCell(i,col));
	}
	if(nr>=5) {
		console.log("coloană! " + m);
		cellList.forEach((cell,index) => cell.classList.add('highlight'));
		puncteaza(m, cellList);
	}

	//linie diagonală 1
	nr = 1;
	cellList = [getCell(lin,col)];
	for(let i = lin-1, j = col-1; i>=0 && j>=0 && tabla[i][j]===m; i--,j--) {
		nr++;
		cellList.push(getCell(i,j));
	}
	for(let i = lin+1, j=col+1; i<nrRanduri && j<nrColoane && tabla[i][j]===m; i++,j++) {
		nr++;
		cellList.push(getCell(i,j));
	}
	if(nr>=5) {
		console.log("diagonală 1! " + m);
		cellList.forEach((cell,index) => cell.classList.add('highlight'));
		puncteaza(m, cellList);
	}

	//linie diagonală 2
	nr = 1;
	cellList = [getCell(lin,col)];
	for(let i = lin-1, j = col+1; i>=0 && j<nrColoane && tabla[i][j]===m; i--,j++) {
		nr++;
		cellList.push(getCell(i,j));
	}
	for(let i = lin+1, j=col-1; i<nrRanduri && j>=0 && tabla[i][j]===m; i++,j--) {
		nr++;
		cellList.push(getCell(i,j));
	}
	if(nr>=5) {
		console.log("diagonală 2! " + m);
		cellList.forEach((cell,index) => cell.classList.add('highlight'));
		puncteaza(m, cellList);
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

function reset() {
	for(let i=0; i<nrRanduri; i++) {
		for(let j=0; j<nrColoane; j++) {
			tabla[i][j] = 0;
			let td = getCell(i, j);
			td.innerHTML = "";
			td.classList.remove('highlight');
		}
	}
}

function puncteaza(mutare, cellList) {
	if(mutare==='X') {
		if (confirm("Jucătorul 1 a câștigat această rundă! Continuați?")) {
			//ok
			let scorx = document.getElementById('scorx');
			scorx.innerHTML = Number(scorx.innerText) + 1;
		}
		else {
			//cancel
		}
	}
	else {
		if (confirm("Jucătorul 2 a câștigat această rundă! Continuați?")) {
			//ok
			let scor0 = document.getElementById('scor0');
			scor0.innerHTML = Number(scor0.innerText) + 1;
		}
		else {
			//cancel
		}		
	}	
}

creareTabel(nrRanduri, nrColoane);

document.getElementById('tabel').addEventListener('click',schimba);