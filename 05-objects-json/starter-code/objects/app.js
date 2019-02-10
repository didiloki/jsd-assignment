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
//1
//'date'
//Description: Our app manages the date 
// every 'date' has 
// - day
// - month
// - year
//every 'date' can 
// - alert
// - notes
//2
//'special day' 
//Description: special day it contins a special event
//every 'special day' has
// - day
// - hour
// - mins
// Every 'special day' can
// - email
// - notification
//3
//'note'
//Description: put a note in specific date
// Every 'note' has 
// - title
// - body
// - location
// Every 'note' can 
// - invite people to share the note with 
// - add attachment to the notes 


// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

  var pet_owner;
 
  // Answer Starts Here
  pet_owner = {
    name: 'badr',
    address : 'Riyadh'
  }
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
  some_pet = {
    name : "" ,
    species:"",
    breed: "",
    noise: "",
    makeNoise: function(){
      return this.makeNoise
    }
  }

  // Answer Ends Here
  
  // 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
  //    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
  //    which behaves as described in Q3.
  
  var Pet;
  // Answer Starts Here
  Pet = function(name,species,breed,noise,makeNoise){
    this.name=name
    this.species=species
    this.breed=breed
    this.noise=noise
    this.makeNoise=function(){
      return this.noise
    }


  }
  // Answer Ends Here
  
  module.exports = {
    answerTwo: pet_owner,
    answerThree: some_pet,
    answerFour: Pet
  }
  
  /////////////////////////////////////////////////////////////
  
  // You're done! Refer back to README.md.
  
  /////////////////////////////////////////////////////////////