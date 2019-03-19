class Turtle {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    swim() {
        return `${this.name} paddles in the water`;
    }
}
/**create a "sub-class" or "child" class of the Turtle class called ninja turtle. This is created using a class declaration, but using the "extends" keyword.*/
class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() {
        return `Feel the power of my ${this.weapon}!`;
    }
}
/**The keyword "super" refers to the parent class and can be used to access any properties and call any methods of the parent class.*/