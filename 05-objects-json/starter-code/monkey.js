// Open the monkey.js file in the starter code.

// Work with a partner to create a monkey object, which has the following properties:

// name
// species
// foodsEaten
// And the following methods:

// eatSomething(thingAsString)
// introduce: producers a string introducing itself, including its name, species, and what it's eaten.
// Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

// Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and brackets).

class Monkey{
    constructor(name,species,foodsEaten){
        this.name = name;
        this.species = species;
        this.foodsEaten = foodsEaten;

    }
    eatSomething(){
        let introduce = ("My name is " + this.name + "." + "Iam from the " + this.species + " spicies." + " I just ate " + this.foodsEaten);
        
        return introduce
    }
}
const bobby = new Monkey("Boby","mandrill","apples")
const dolly = new Monkey("dolly","lesula","bananas")
const domo = new Monkey("domo","gelada","bananas")

console.log(bobby.eatSomething())
console.log(dolly.eatSomething())