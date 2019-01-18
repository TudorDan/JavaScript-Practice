/**
The async keyword allows you to write asynchronous code as if it was synchronous, using the await operator.
The await operator will wrap the return value of the function in a promise that can then be assigned to a variable.
*/
async function loadGame(userName) {
	try {
		const user = await login(userName);
		const info = await getPlayerInfo(user.id);
		//load the game using the returned info
	}
	catch(error) {
		throw error;
	}
}
//The await operator will ensure the next line of code is not executed until the login() function returns a user object

/**
Instead of having lots of specific functions, one function can be written that accepts a callback.
*/
function random(a, b = 1) {
	//if only 1 argument is provided, we need to swap the values of a and b
	if(b === 1) {
		[a, b] = [b, a];
	}
	return Math.floor( (b - a + 1) * Math.random() ) + a;
}
random(6);
random(10, 20);
//We can make this function more generic by adding a callback parameter, so a calculation is performed on the random numer before it's returned:
function random(a, b, callback) {
	if(b === undefined) b = a, a = 1; //if only one argument is supplied, assume the lower limit is 1
	let result = Math.floor( (b - a + 1) * Math.random() ) + a;
	if(callback) {
		result = callback(result);
	}
	return result;
}
function square(n) {
	return n * n;
}
random(1, 10, square);
random(1, 5, (n) => 2 * n);
