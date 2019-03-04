/**
ES6 instroduced support for generators.
Generators are special functions used to produce iterators that maintain the state of a value.
*/
function* exampleGenerator() {
	//code for the generator goes here
}
/**
Calling a generator function doesn't actually run any of the code in the function; it returns a Generator object that can be used to create an iterator that implements a next() method that returns a value every time the next() method is called.
*/
//For example, we create a generator to produce a Fibonacci number series
function* fibonacci(a, b) {
	let [ prev, current ] = [ a, b ];
	while(true) {
		[ prev, current ] = [ current, prev + current ];
		yield current; //generator functions employ the "yield" keyword to return a value
	}
}
//using "yield" the state of the value returned is remembered the next time yield is called
/*to create a generator object based on this function we simply assign a variable to the function*/
const sequence = fibonacci(1, 1);
//the generator object is now stored in the sequence variable. It inherits a method called next(), which is used to obtain the next value produced by the yield command
sequence.next(); //>>2
//It's also possible to iterate over the generator to invoke it multiple times
for(n of sequence) {
	//stop the sequence after it reaches 100
	if(n > 100) break;
	console.log(n);
}