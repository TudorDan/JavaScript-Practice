/**
A recursive function is one that invokes itself until a certain condition is met.
*/
function factorial(n) {
	if(n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
function collatz(n, sequence = [n]) {
	if(n === 1) {
		return `Sequence took ${sequence.length} steps. It was ${sequence}`;
	}
	if(n % 2 === 0) {
		n /= 2;
	} else {
		n = 3 * n + 1;
	}
	return collatz(n, [...sequence, n]);
}

/**
Callbacks are functions passed to other functions as arguments and then invoked inside the function they are passed to.
*/
function wait(message, callback, seconds) {
	setTimeout(callback, seconds * 1000);
	console.log(message);
}
function selfDestruct() {
	console.log('BOOOOM!');
}
wait('This tape will self-destruct in five seconds...', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not...?');
