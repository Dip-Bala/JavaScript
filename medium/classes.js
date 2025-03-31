/**************Classes **************/
//In JavaScript, classes are a way to define blueprints for creating objects (these objects are different from the objects defined in the last section).


/*****
1.Class Declaration: 
You declare a class using the class keyword. Inside a class, you define properties (variables) and methods (functions) that will belong to the objects created from this class.
2. Constructor:
A special method inside the class that is called when you create an instance (an object) of the class.
It’s used to initialize the properties of the object.
3. Methods:
Functions that are defined inside the class and can be used by all instances of the class.
*/
// class Rectangle {
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     area(){
//         return this.width * this.height;
//     }

//     paint(){
//         console.log(`Painting the rectangle ${this.color}`)
//     }
// }

// const rect = new Rectangle(2, 4, 'red');
// const area = rect.area();
// console.log(area)
// rect.paint();

/*
4. Inheritance:
Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.
*/
class Shape{
    constructor(color){
        this.color = color;
    }
    paint(){
        console.log(`painting with color ${color}`);
    }
    area(){
        throw new Error('The area method must be implemented in the subclass');
    }
    getDescription() {
        return `A shape with color ${this.color}`;
    }
}

class Rectangle extends Shape{
    constructor(width, height, color) {
        super(color);  // Call the parent class constructor to set the color
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    getDescription() {
        return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color);  // Call the parent class constructor to set the color
        this.radius = radius;
    }

    area() {
        return (Math.PI * this.radius * this.radius).toFixed(2);;
    }

    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}

// const circle = new Circle(20);
// console.log(circle.area());

/*
5. Static Methods:
Methods that belong to the class itself, not to instances of the class. You call them directly on the class.
6. Getters and Setters:
Special methods that allow you to define how properties are accessed and modified.
 */