/**
A closure is a reference to a variable that was created inside the scope of another function, but is then kept alive and used in another part of the program.
*/
function outer() {
	const outside = 'Outside!';
	function inner() {
		const inside = 'Inside!';
		console.log(outside);
		console.log(inside);
	}
	console.log(outside);
	inner();
}
/**
Whenever a function is defined inside another function, the inner function will have access to any variables that are declared in the outer function's scope.
*/
//A closure is formed when the inner function is returned by the outer function:
function outer() {
	const outside = 'Outside!';
	function inner() {
		const inside = 'Inside!';
		console.log(outside);
		console.log(inside);
	}
	return inner;
}
//We can assign a variable to the return value of the outer() function
const closure = outer();