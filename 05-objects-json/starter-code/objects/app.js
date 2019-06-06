/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here
var Car = function(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  return `Car is\n- ${this.make}\n- ${this.model}\n- ${this.year}\nand it can\n- drive\n- brake\n- park`
}
var Car1 = Car('Mazda', '2233232', 2016)
console.log(Car1)
// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

  var pet_owner;

  // Answer Starts Here
  pet_owner = {name :'Mohammed',address:'Riyadh'}
  pet_owner2 = {name:'Khalid',address:'makkah'}
  console.log(`Evary Owner has\n- ${pet_owner.name}\n- ${pet_owner.address}`)
  // Answer Ends Here
  
  // 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.
  
    // Pet
    // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
    // Every 'pet' has:
    // - a name
    // - a species
    // - a breed
    // - a noise that it can make (e.g. 'bark', 'meow', etc.)
    // Every pet can:
    // - make noise (each pet makes its own unique noise, as specified by `noise`.
  
  var some_pet;
  
  // Answer Starts Here
  some_pet = function(name, species, breed, noise){
    this.name = name
    this.species = species 
    this.breed = breed
    this.noise = noise
    
    return `Every 'pet' has:\n- ${this.name}\n- ${this.species}\n- ${this.noise}\nEvery pet can"\n- make ${this.noise}` 
    }
  // Answer Ends Here
  
  // 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
  //    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
  //    which behaves as described in Q3.
  
  var Pet;
  // Answer Starts Here
  class Pet{
    constructor(name, species, breed, noise){
      this.name = name
      this.species = species 
      this.breed = breed
      this.noise = noise
    } 
    makeNoise(noise){
    return `make ${noise}`
    }
    }
    const p = new Pet('dog', 'chperid', 'chperid', 'woof');
    
    console.log(`Every 'pet' has:\n- ${p.name}\n- ${p.species}\n- ${p.noise}\nEvery pet can"\n- make ${p.makeNoise='woof'}`) 
    
  // Answer Ends Here
  
  module.exports = {
    answerTwo: pet_owner,
    answerThree: some_pet,
    answerFour: Pet
  }
  
  /////////////////////////////////////////////////////////////
  
  // You're done! Refer back to README.md.
  
  /////////////////////////////////////////////////////////////