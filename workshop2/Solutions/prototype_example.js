// ---------------------------------------------------------------------
// DEFINING THE CONSTRUCTOR AND OBJECT METHODS
// ---------------------------------------------------------------------

/** 
 * Define the constructor function
 * It populates the object properties with initial values
 */
function Car(name, colour) {
    this.name = name;
    this.colour = colour;
    this.hasFuel = false;
}

/**
 * Add a method to the Car prototype
 * Method can get reference to the object properties/methods via the "this" keyword
 */
Car.prototype.go = function () {
    var message;
    if (this.hasFuel == true) {
        message = 'The ' + this.colour + ' ' + this.name + ' is moving';
        this.hasFuel = false;       
    } else {
        message = 'The ' + this.colour + ' ' + this.name + ' has no fuel!';
    }
    console.log(message);
};

/**
 * Add another method to the Car prototype
 */
Car.prototype.stop = function () {
    var message = 'The ' + this.colour + ' ' + this.name + ' has stopped';
    console.log(message);
};


/**
 * Add another method to the Car prototype
 */
Car.prototype.refuel = function () {
    var message = 'Glug glug... Filling the ' + this.colour + ' ' + this.name + ' with fuel';
    this.hasFuel = true;
    console.log(message);
};


// ---------------------------------------------------------------------
// USING THE OBJECTS
// ---------------------------------------------------------------------

// Create some objects with the constructor function
var myCar = new Car("Corvette", "Red");
var myOtherCar = new Car("Cadillac", "Pink");

// Both objects exist at same time...
// They have same properties (as defined in the constructor)
// ... but their properties hold different values (the values we passed to the constructor)
// They both have access to the methods we added to the Car prototype...

myCar.go();
myCar.refuel();

myOtherCar.refuel();
myOtherCar.go();

myCar.go()

myCar.stop();
myOtherCar.stop();
