/**
A promise is an object simplifies the process and avoids the convoluted code that can result from using multiple callbacks.
When a promise is created, it calls an asynchronous operation and is then said to be pending. At this stage, the promise is said to be unsettled.
Once the promise is said to have been settled, a promise can result two different outcomes: resolved (successfully completed), or rejected (error).
*/
const promise = new Promise( (resolve, reject) => {
	//initialization code goes here
	if(success) {
		resolve(value);
	} else {
		reject(error);
	}
});
const dice = {
	sides: 6,
	roll() {
		return Math.floor(this.sides * Math.random()) + 1;
	}
}
const promise = new Promise( (resolve, reject) => {
	const n = dice.roll();
	setTimeout( () => {
		(n > 1) ? resolve(n) : reject(n);
	}, n * 1000);
});