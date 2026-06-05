// GLAB 308A.2.1:
// An Object-Oriented Adventure

// Part 1: Humble Beginnings

// Let’s model a simple adventurer with basic properties such as health and an inventory.

// We will call the adventurer “Robin.”

//  Add a static ROLES array to the Adventurer class, with the values “Fighter,” 
// “Healer,” and “Wizard.” Feel free to add other roles, if you desire!

const adventurer = {

    name: "Robin",

    health: 10,

    inventory: ["sword", "potion", "artifact"],

    companion: {
        name: "Leo",

        type: "Cat",

        companion: {
            name: "Frank",
            type: "Flea",
            belonging: ["small hat", "sunglasses"],
        },
    },

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;

        console.log(`${this.name} rolled a ${result}.`);
    },
};

// console.log("Adventurer BASICS: ");

// console.log(adventurer.name);
// console.log(adventurer.health);
// console.log(adventurer.inventory);

// As an additional practice exercise,
// create a loop that logs each item in Robin’s inventory.

for (let i = 0; i < adventurer.inventory.length; i++)
    // console.log("Logged Items", adventurer.inventory[i]);

    //  ADD COMPANION - LEO

    // Add a “companion” sub-object to “Leo” with the following properties:

    // The companion’s name is “Frank.”

    // The companion’s type is “Flea.”

    // The companion has its own belongings, which includes a small hat and sunglasses.
    adventurer.companion.companion = {
        name: "Frank",
        type: "Flea",
        belonging: ["small hat", "sunglasses"],
    };

// console.log(adventurer.companion.companion.name);
// console.log(adventurer.companion);
// console.log(adventurer.companion.companion.belonging);


// dice rolling 
// adventurer.roll()
// adventurer.roll()




// Every character should also be able to make rolls. 
// Add the roll method to the Character class.

class Character {

    static MAX_HEALTH = 100;

    constructor(name) {

        this.name = name;

        this.health = Character.MAX_HEALTH;

        this.inventory = [];


    };




    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;

        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}
// Now, we can re-create Robin using the Character class!
// Describes a parameter of a function, method, or constructor.


// ----------------------------------------------------------------
// @param {type} name – description
// or @param {type} [name=default] – 
// description 
// for optional / default values.
// JSDoc tag function parameters
// @param{string}name - line document the constructor agrue

// Example MDN

//  * Calculates the area of a rectangle.
//  *
//  * @param {number} width  The rectangle’s width.
//  * @param {number} height The rectangle’s height.
//  * @returns {number} The calculated area.
//  */
// function area(width, height) {
//   return width * height;
// }


//  * Greets a user.
//  *
//  * @param {string} [name='Guest'] – Optional name; defaults to “Guest”.
//  */
// function greet(name = 'Guest') {
//   console.log(`Hello, ${name}!`);
// }
// --------------------------------------------------------------------







class Companion extends Character {
    /**
     * @param {string} name  – companion’s name
     * @param {string} role  – role (Healer, Fighter, Wizard …)
     * @param {string} type  – type (Cat, Flea, …)
     */
    constructor(name, role, type) {
        super(name);
        this.role = role;
        this.type = type;
        this.power = 10;
        this.stamina = 10;
        this.energy = 10;
        this.experience = 0;
    }
}

// Even the companions can roll now; give it a try! This saves us a significant 
// amount of typing since we do not need to manually add this method to each nested 
// object.

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"]; // required static array

    /**
     * @param {string} name – adventurer’s name
     * @param {string} role – must be one of Adventurer.ROLES
     */
    constructor(name, role) {
        super(name);


        // Pt3
        // Part 3: Class Features

        // Part 3: Class Features
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(
                `Invalid role "${role}". Choose from: ${Adventurer.ROLES.join(", ")}`
            );
        }
        this.role = role;
        // When extending a class, the “child” class inherits all properties of its 
        // parents. This means that we do not need to account for the name, health, 
        // inventory, or roll method of Character children classes.
        this.inventory.push("bedroll", "50 gold coins");
    }

    /** Scout ahead  */
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        this.roll();
    }
    /**
     * Duel this adventurer against another.
     * @param {Adventurer} opponent
     */
    duel(opponent) {
        console.log(` ${this.name} challenges ${opponent.name} to a duel!`);
        while (this.health > 50 && opponent.health > 50) {
            const myRoll = this.roll();
            const oppRoll = opponent.roll();

            // lower roll loses 1 health point
            if (myRoll < oppRoll) this.health--;
            else if (oppRoll < myRoll) opponent.health--;
            // tie → no damage

            console.log(
                ` Rolls: ${this.name}=${myRoll}, ${opponent.name}=${oppRoll}`
            );
            console.log(
                ` Health: ${this.name}=${this.health}, ${opponent.name}=${opponent.health}`
            );
        }

        const winner = this.health > 50 ? this : opponent;
        console.log(` ${winner.name} wins the duel!`);
        return winner;
    }
}
// Let’s begin by creating an Adventurer class. What attributes might be 
// specific to an adventure, but that not all characters have? Take a look at 
// our example below, and expand upon it with your own properties and methods.

// Add a static ROLES array to the Adventurer class, with the values “Fighter,” 
// “Healer,” and “Wizard.” Feel free to add other roles, if you desire!



// What else should an adventurer be able to do? What other properties 
// should they have?

// health,level, stamina, exp

// health - heal
// level- power
// stamina - energy
// Experience - loot()

// Next, create a Companion class with properties and methods 
// specific to the companions.

// class Companion extends Character {
// constructor(name, role, type) {
//     super(name)
//     this.type = type;
//     this.role = role;
//     this.power = 10;
//     this.stamina = 10;
//     this.energy = 10;
//     this.experience = 0;
// }

// }

// Finally, change the declaration of Robin and the companions to use the 
// new Adventurer and Companion classes.

// const robinadv = new Adventurer("RobinAdv", "Wizard");
// const leo =  new Companion("Leo", "Healer", "Cat")

// robinadv.companion = leo
// console.log(robinadv);
// console.log(robinadv);



// Part 4: Class Uniforms

// Using static properties and methods, you can create uniform attributes for 
// the class itself rather than instances of the class. Static properties are 
// typically constant values that can be used elsewhere for reference, or utility 
// methods that do not rely on the values of a specific class instance.



// Using the static keyword:

// Add a static MAX_HEALTH property to the Character class, equal to 100.
// class Character {

// }
// class Character {

//     static MAX_HEALTH = 100;

//   constructor (name) {

//     this.name = name;

//     this.health = Character.MAX_HEALTH;

//     this.inventory = [];


//   };

// Add a static ROLES array to the Adventurer class, with the values 
// “Fighter,” 
// “Healer,” and “Wizard.” Feel free to add other roles, if you desire!

// Add a check to the constructor of the Adventurer class that 
// ensures the given role matches one of these values.

// Are there other static properties or methods that make sense to add to 
// these classes?

// Part 5: Gather your Party

// Sometimes, you need many objects of a class that have one or 
// more shared 
// property values. A common approach for creating many similar 
// objects of a single 
// class, and keeping track of them is creating a “factory.”

class AdventurerFactory {

    /**
     * @param {string} role – role for every adventurer this factory makes
     */
    constructor(role) {
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(
                `Factory role "${role}". Choose from: ${Adventurer.ROLES.join(
            ", "
        )}`
            );
        }


        // Factories are classes that generate objects according to the 
        // factory’s instance properties.

        // As an example, let’s look at how we might create many “healer” 
        // role adventurers using a factory:

        // class AdventurerFactory {  

        //   constructor (role) {

        this.role = role;

        this.adventurers = [];

    }

    /** Create a new Adventurer with the given name and store it. */
    generate(name) {

        const newAdv = new Adventurer(name, this.role);

        this.adventurers.push(newAdv);
        return newAdv;

    }

    /** Find an adventurer by its index in the internal array. */
    findByIndex(index) {

        return this.adventurers[index];

    }
    /** Find an adventurer by its name. */
    findByName(name) {

        return this.adventurers.find((a) => a.name === name);

    }

}




// Orignal robin
const robin = new Adventurer("Robin", "Wizard");

// same inventory as list earlier 
robin.inventory.push("sword", "potion", "artifact");

//  using the Companion class
const leo = new Companion("Leo", "Healer", "Cat");
const frank = new Companion("Frank", "Fighter", "Flea");

// Frank’s “belongings” are just his inventory
frank.inventory = ["small hat", "sunglasses"];

// nest the companions 
robin.companion = leo;
leo.companion = frank;

console.log(robin);
console.log(robin.companion);
console.log(robin.companion.companion);


// Use the roll() functionality to create opposing rolls for 
// // each adventurer.

robin.roll(); // Robin rolls
leo.roll(); // Leo rolls
frank.roll(); // Frank rolls

robin.scout(); // Scout action



// Now, we can create many “healers” using the healer factory, 
// and conveniently find them using the factory’s methods. 
// We can also add additional convenience methods to the factory as the 
// requirements of the program expand.


const healFactory = new AdventurerFactory("Healer");
const healer = healFactory.generate("Mira"); //new healer
robin.duel(healer); //duel robin vs Mira 

// An alternative approach to this would be to extend the Adventurer 
// class to create a Healer class. This would be the practical 
// approach if healers had additional properties and methods, 
// but if healers are just adventurers with a specific role, 
// creating an entire class for them is inefficient.

// In the next part, it may be prudent to create classes for each 
// adventuring role, depending on the additional properties and 
// methods you would like to add.

// Part 6: Developing Skills

// Many of the core features of these characters are now implemented, but the adventurers cannot  really do much yet. The only action (method) they have is scout().

// Create an additional method, duel(), for the Adventurer class 
// with the following functionality:

// Accept an Adventurer as a parameter.

// Use the roll() functionality to create opposing rolls for 
// each adventurer.

// Subtract 1 from the adventurer with the lower roll.

// Log the results of this “round” of the duel, including the rolls and current health values.

// Repeat this process until one of the two adventurers reaches 50 health.

// Log the winner of the duel: the adventurer still above 50 health.

// What other properties and methods could these classes have? Should fighters, healers, and wizards have their own methods? Should companions have specific methods?

// Feel free to experiment with your own ideas, be they silly or practical. The goal of this exercise is to develop new skills for the characters and yourself! Express your creativity.

// ---- Factory demonstration -----------------------------------------
const wizardFactory = new AdventurerFactory("Wizard");
wizardFactory.generate("Alia");
wizardFactory.generate("Bren");
wizardFactory.generate("Cora");
console.log("All wizards created by the factory:", wizardFactory.adventurers);

// class AdventurerFactory { … } – class definition	
// Syntax for creating a class, the constructor method, and how class bodies work.
// constructor(role) { … } – constructor
// if (!Adventurer.ROLES.includes(role)) { … } – static property access
// this.adventurers = []; – instance property
// generate(name) { … } Declaring regular (non‑static) methods on a class prototype.

// new AdventurerFactory("Wizard") What the new operator 
// does: creates an object, runs the constructor, and 
// returns the instance.

// wizardFactory.generate("Alia") How to invoke a method on 
// an object instance.

// wizardFactory.adventurers Dot‑notation property access 
// (object.property).
