/**
An Immediately Invoked Function Expression - or IIFE - is an anonymous function that is invoked as soon as it's defined
The global namespace is not polluted with lots of variable names
*/
(function() {
	const temp = 'World';
	console.log(`Hello ${temp}`);
})();
/**
The recommended way to use strict mode is to place all your code inside an IIFE
*/
(function() {
	'use strict';
	//All your code would go inside this function
})

/**
A function is able to redefine itself. This is done by asigning a anonymous function to a variable that "has the same name as the function"
*/
function party() {
	console.log('Wow this is amazing!');
	party = function() {
		console.log('Been there, got the T-Shirt.');
	}
}
party();
party();
/**
If the function is also asigned to another variable, this function will maintain the original function definition and not be rewritten.
*/
function party() {
	console.log('Wow this is amazing!');
	party = function() {
		console.log('Been there, got the T-Shirt.');
	}
}
const beachParty = party; //note that the party function has not been invoked
beachParty(); //the party function has now been redefined, even though it hasn't been called explicitly
party();
beachParty(); //but this function hasn't been redefined
beachParty(); //no matter how many times this is called