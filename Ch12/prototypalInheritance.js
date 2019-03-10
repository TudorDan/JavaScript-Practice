/*Prototypal inheritance means that every class has a prototype property that is shared by every instance of the class. Any properties or methods of a class's prototype can be accessed by every object instantiated by that class.*/
//let's create a class for ninja turtles
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
}
//create a new turtle instance
const leo = new Turtle('Leonardo');

//Since the prototype is just an object, we can add new properties by assignment
Turtle.prototype.weapon = 'Hands';
//We can also add a method to the prototype in a simmilar way
Turtle.prototype.attack = function() {
    return `Feel the power of my ${this.weapon}!`;
}
//If we create a new Turtle instance, we can see it inherits the weapon property and attack() method from the Turtle.prototype object
const raph = new Turtle('Raphael');

//There are a number of ways to find the prototype of an object
raph.constructor.prototype;
Object.getPrototypeOf(raph);
raph._proto_;

//If we create another instance of the Turtle class, we'll see that it also inherits a weapon property that has the same value of "Hands"
const don = new Turtle('Donatello');

//An object instance can overwrite any properties or methods inherited from its prototype by simply assigning a new value to them:
leo.weapon = 'Katana Blades';
raph.weapon = 'Sai';
don.weapon = 'Bo Staff';

//A good candidate for a prototype property or method is something that will remain the same for every instance of that class
Turtle.prototype.food = 'Pizza';
Turtle.prototype.eat = function() {
    return `Mmm, this ${this.food} tastes great!`;
}

//Use the class constructor to initialize an instance:
const mike = new Turtle('Michelangelo');
//Verify that the new instance has inherited properties an methods from the prototype:
mike.eat();
//Augment the instance with its own individual weapon property
mike.weapon = 'Nunchakus';
mike.attack();