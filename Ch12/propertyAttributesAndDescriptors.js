/**
 * All objects have the following attributes stored in a property descriptor:
 * value: the value of the property; it is "undefined" by default
 * writable: this boolean shows whether the property can be changed or not; it is "false" by default
 * enumerable: this boolean shows whether a property will show up when the object is displayed in a "for in" loop; it is "false" by default 
 * configurable: this boolean value shows whether you can delete a property or change any of its attributes; it is "false" by default
 */

//Consider the following object:
const me = {
    name: 'DAZ'
};
/**The property descriptor for the "name" property might look like this*/
{ value: 'DAZ', writable: true, enumerable: true, configurable: true }

//We can add more properties by assignment:
me.age = 21; //it can only be used to set the "value" attribute of the property

//We can see the property values using the "Object.getOwnPropertyDescriptor()" method:
Object.getOwnPropertyDescriptor(me, 'name');

//We can add properties to an object using the "Object.defineProperty()" method:
Object.defineProperty(me, 'eyeColor', {value: 'blue', writable: false, enumerable: true});

//The "eyeColor" property is read-only (because the "writable" property was set to false).
me.eyeColor = 'purple';
me.eyeColor; //returns 'blue'

/**An object property descriptor can have get() and set() methods instead of a value attribute*/
me.age = 21;
me.retirementAge = 65;
Object.defineProperty(me, 'yearsToRetirement', {
    get() {
        if(this.age > this.retirementAge) {
            return 0;
        } else {
            return this.retirementAge - this.age;
        }
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});
//The "getter" bases the 'yearsToRetirement' property on the 'age' and 'retirementAge' properties:
me.yearsToRetirement; //returns 44
//The "setter" allows the 'age' to be changed by setting 'yearsToRetirement' property:
me.yearsToRetirement = 10;
me.age //returns 55

/**
 * We create a "Dice" class that uses a "get" function that returns a description of the number of sides, rather than just the actual number, and a "set" function that prohibits a non-positive number of sides to be set:
 */
class Dice {
    constructor(sides=6) {
        Object.defineProperty(this, 'sides', {
            get() {
                return `This dice has ${sides} sides`;
            },
            set(value) {
                if(value > 0) {
                    sides = value;
                    return sides;
                } else {
                    throw new Error('The number of sides must be positive');
                }
            }
        });
        this.roll = function() {
            return Math.floor(sides * Math.random() + 1);
        }
    }
}
//The number of sides can now be assigned in the usual way:
const yellowDice = new Dice;