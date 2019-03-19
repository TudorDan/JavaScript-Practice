//The Turtle() class propery has been modified to include a private _color property
class Turtle {
    constructor(name, color) {
        this.name = name;
        let _color = color;
        this.setColor = (color) => {
            if(typeof color === 'string') {
                return _color = color;
            } else {
                throw new Error('Color must be a string');
            }
        }
        this.getColor = () => _color;
    }
}
//The getColor() and setColor() methods are known as getter and setter methods and they form a closure over this variable and provide controlled access to the property instead:
raph = new Turtle('Raphael', 'Red');
raph.getColor();
raph.setColor(4);