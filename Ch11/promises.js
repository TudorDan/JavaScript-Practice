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
/**
The then() method can be used to deal with the outcome. This method accepts two arguments: a fulfilment function that's called when the promise is resolved and a rejection function that's called if the promise is rejected.
*/
promise.then( result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat! ... I rolled a ${result}`) );
/**
Alternatively, the catch() method can be used to specify what to do if the operation fails:
*/
promise.then( result => console.log(`I rolled a ${result}`) )
.catch( result => console.log(`Drat! ... I rolled a ${result}`) );

//Example
const dice = {
	sides: 6,
	roll() {
		return Math.floor(this.sides * Math.random()) + 1;
	}
}
console.log('Before the roll');
const roll = new Promise( (resolve, reject) => {
	const n = dice.roll();
	if(n > 1) {
		setTimeout( () => resolve(n), n * 200 );
	} else {
		setTimeout( () => reject(n), n * 200 );
	}
} );
roll.then( result => console.log(`I rolled a ${result}`) )
.catch( result => console.log(`Drat! ... I rolled a ${result}`) );
console.log('After the roll');

/**
If each function that performs an asynchronous operation returns a promise, we can chain the then() methods together:
*/
login(userName)
.then( user => getPlayerInfo(user.id) )
.then( info => loadGame(info) )
.catch( throw error )
