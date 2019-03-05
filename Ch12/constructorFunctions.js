//a dice OBJECT
const dice = {
	sides: 6,
	roll() {
		return Math.floor(this.sides * Math.random() + 1);
	}
}
//the dice object rewritten as a CONSTRUCTOR FUNCTION
const Dice = function(sides = 6) {
	this.sides = sides;
	this.roll = function() {
		return Math.floor(this.sides * Math.random() + 1);
	}
}
//create an INSTANCE of the dice constructor function using the "new" operator
const redDice = new Dice();

/*to create a new object*/
const literalObject = {}; //the literal syntax

constuctedObject = new Object();//the Object constructor function


/*create an array*/
const literalArray = [1, 2, 3]; //literal syntax

constructedArray = new Array(1, 2, 3); //constructor function

/*ES6 "class declaration" syntax does exactly the same as a constructor function*/
class Dice {
	constructor(sides = 6) {
		this.sides = sides;
	}

	roll() {
		return Math.floor(this.sides * Math.random() + 1);
	}
}
/*create an instance of the Dice class*/
const blueDice = new Dice(20);

//if we want to make another copy of the redDice object, but the name of its constructor was unknown, we could use the following
const greenDice = new redDice.constructor(10);