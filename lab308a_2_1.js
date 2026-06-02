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

  constructor (name) {

    this.name = name;

    this.health = Character.MAX_HEALTH;

    this.inventory = [];


  };

   


  roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;

        console.log(`${this.name} rolled a ${result}.`);
    }
}
// Now, we can re-create Robin using the Character class!

const robin = new Character("Robin");

robin.inventory = ["sword", "potion", "artifact"];

robin.companion = new Character("Leo");

robin.companion.type = "Cat";

robin.companion.companion = new Character("Frank");

robin.companion.companion.type = "Flea";

robin.companion.companion.inventory = ["small hat", "sunglasses"];


// Even the companions can roll now; give it a try! This saves us a significant 
// amount of typing since we do not need to manually add this method to each nested 
// object.

robin.roll();
robin.companion.companion.roll();
robin.companion.roll();

// Pt3
// Part 3: Class Features

// Part 3: Class Features

// When extending a class, the “child” class inherits all properties of its 
// parents. This means that we do not need to account for the name, health, 
// inventory, or roll method of Character children classes.

// Let’s begin by creating an Adventurer class. What attributes might be 
// specific to an adventure, but that not all characters have? Take a look at 
// our example below, and expand upon it with your own properties and methods.

// Add a static ROLES array to the Adventurer class, with the values “Fighter,” 
// “Healer,” and “Wizard.” Feel free to add other roles, if you desire!

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard" ];

  constructor (name, role) {

    super(name);

    for (const r in ROLES) {
        
    }
    // Adventurers have specialized roles.

    this.role = role;

    // Every adventurer starts with a bed and 50 gold coins.

    this.inventory.push("bedroll", "50 gold coins");

  }

  // Adventurers have the ability to scout ahead of them.

  scout () {

    console.log(`${this.name} is scouting ahead...`);

    super.roll();

  }

}

// What else should an adventurer be able to do? What other properties 
// should they have?

// health,level, stamina, exp

// health - heal
// level- power
// stamina - energy
// Experience - loot()

// Next, create a Companion class with properties and methods 
// specific to the companions.

class Companion extends Character {
constructor(name, role, type) {
    super(name)
    this.type = type;
    this.role = role;
    this.power = 10;
    this.stamina = 10;
    this.energy = 10;
    this.experience = 0;
}

}

// Finally, change the declaration of Robin and the companions to use the 
// new Adventurer and Companion classes.

const robinadv = new Adventurer("RobinAdv", "Wizard");
const leo =  new Companion("Leo", "Healer", "Cat")

robinadv.companion = leo
console.log(robinadv);
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

// Add a static ROLES array to the Adventurer class, with the values “Fighter,” 
// “Healer,” and “Wizard.” Feel free to add other roles, if you desire!

// Add a check to the constructor of the Adventurer class that ensures the 
// given role matches one of these values.

// Are there other static properties or methods that make sense to add to 
// these classes?

// Part 5: Gather your Party

// Sometimes, you need many objects of a class that have one or more shared 
// property values. A common approach for creating many similar objects of a single 
// class, and keeping track of them is creating a “factory.”

// Factories are classes that generate objects according to the factory’s instance properties.

// As an example, let’s look at how we might create many “healer” role adventurers using a factory:

// class AdventurerFactory {  

//   constructor (role) {

//     this.role = role;

//     this.adventurers = [];

//   }

//   generate (name) {

//     const newAdventurer = new Adventurer(name, this.role);

//     this.adventurers.push(newAdventurer);

//   }

//   findByIndex (index) {

//     return this.adventurers[index];

//   }

//   findByName (name) {

//     return this.adventurers.find((a) => a.name === name);

//   }

// }



// const healers = new AdventurerFactory("Healer");

// const robin = healers.generate("Robin");


// Now, we can create many “healers” using the healer factory, 
// and conveniently find them using the factory’s methods. 
// We can also add additional convenience methods to the factory as the 
// requirements of the program expand.

// An alternative approach to this would be to extend the Adventurer class to create a Healer class. This would be the practical approach if healers had additional properties and methods, but if healers are just adventurers with a specific role, creating an entire class for them is inefficient.

// In the next part, it may be prudent to create classes for each adventuring role, depending on the additional properties and methods you would like to add.

// Part 6: Developing Skills

// Many of the core features of these characters are now implemented, but the adventurers cannot  really do much yet. The only action (method) they have is scout().

// Create an additional method, duel(), for the Adventurer class with the following functionality:

// Accept an Adventurer as a parameter.

// Use the roll() functionality to create opposing rolls for each adventurer.

// Subtract 1 from the adventurer with the lower roll.

// Log the results of this “round” of the duel, including the rolls and current health values.

// Repeat this process until one of the two adventurers reaches 50 health.

// Log the winner of the duel: the adventurer still above 50 health.

// What other properties and methods could these classes have? Should fighters, healers, and wizards have their own methods? Should companions have specific methods?

// Feel free to experiment with your own ideas, be they silly or practical. The goal of this exercise is to develop new skills for the characters and yourself! Express your creativity.

