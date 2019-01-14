/**
call() method can set the value of this inside a function to an object that is provided as the first argument
*/
function sayHello() {
	return `Hello, my name is ${this.name}`;
}
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

sayHello.call(clark);
sayHello.call(bruce);


/**
the first argument is always the value of this
*/
function sayHello(greeting='Hello') {
	return `${greeting}, my name is ${this.name}`;
}

sayHello.call(clark, 'How do you do');

/**
If a function doesn't refer to an object as this in its body, it can still be called using the call() method, but you need to provide null as its first argument
*/
function square(x) {
	return x * x;
}

square.call(null, 4);

/**
If a function takes some time to compute a return value, we can save the result in a cache property.
We can rewrite the square() function so it saved each result in a cache object that is property of the function.
*/
function square(x) {
	square.cache = square.cache || {};
	if(!square.cache[x]) {
		square.cache[x] = x * x;
	}
	return square.cache[x];
}