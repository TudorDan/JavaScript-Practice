const squareElement = document.getElementById('square');
let angle = 0;

//animation using setInterval
/*
setInterval( () => {
	angle = (angle + 2) % 360;
	squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60 );
*/

//animation using requestAnimationFrame
function rotate() {
	angle = (angle + 2) % 360;
	squareElement.style.transform = `rotate(${angle}deg)`;
	window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

//stop the requestAnimationFrame
/*
cancelAnimationFrame(id);
*/