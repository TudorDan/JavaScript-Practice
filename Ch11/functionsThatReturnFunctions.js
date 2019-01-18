/**
Functions can accept another function as an argument (a callback), but they can also return a function:
*/
function returnHello() {
	console.log('returnHello() called');
	return function() {
		console.log('Hello World!');
	}
}
//To make use of the function that is returned, we need to assign it to a variable:
const hello = returnHello();
//Now we can invoke the "Hello World!" function by placing parentheses after the variable that it was assigned to:
hello()

//Examples:
function greeter(greeting = 'Hello') {
	return function() {
		console.log(greeting);
	}
}
const englishGreeter = greeter();
englishGreeter();

const frenchGreeter = greeter('Bonjour');
frenchGreeter();

const germanGreeter = greeter('Guten Tag');
germanGreeter();