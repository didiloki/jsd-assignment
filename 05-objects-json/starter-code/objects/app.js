/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. 
//In comments, list at least three reasonable abstractions that you might use to build this program; 
//for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. 
//Below is an example - please write your answer in the same format.
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

/* (1)
'CalendarDate'
Description: our app browses the calendar and stored tasks
Every 'CalendarDate' has:
- Description
- Tasks
- Date
Every 'CalendarDate' can:
- Modified
- Add a task
*/

/* (2)
'Task'
Description: our app stores and tracks the upcoming tasks in the calendar
Every 'Task' has:
- Title
- Description
- Date
- Priority
- State
- Notification
Every 'Task' can:
- Modified
- Mark as completed
- Set Notification
*/

/* (3)
'Notification'
Description: our app notify user for upcoming dates that activate notification
Every 'Notification' has:
- Name
- Description
- Date
- Time
- Sound
- Message
Every 'Notification' can:
- Modified
- Set Sound
- Set Time
*/


// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. 
//Be sure to give it reasonable values for each of its properties.

// 'Owner'
// Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
// Every 'owner' has:
// - a name
// - an address

var pet_owner;

// Answer Starts Here

pet_owner = {
  _name: "Wafa",
  _address: "1st street"
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
  _name: "",
  _species: "",
  _breed: "",
  _noise: "",
  makeNoise: new function () {
    console.log(this._noise);
  }
}

// Answer Ends Here

// 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

var Pet;
// Answer Starts Here

Pet = function (name, species, breed, noise) {
  this._name = name;
  this._species = species;
  this._breed = breed;
  this._noise = noise;
};

Pet.prototype.description = function () {
  return "Description: We are making an app for a veterinary clinic - it manages pets' vaccinations."
};

Pet.prototype.info = function () {
  return "Name: " + this._name + " , Species: " + this._species + " , Breed: " + this._breed + " , Noise: " + this._noise;
};

Pet.prototype.makeNoise = function (noise) {
  console.log(this._noise)
};

var pet = new Pet("cat1", "Cats", "family", "meow");
console.log(pet.description());
console.log(pet.info());
pet.makeNoise();

// Answer Ends Here

module.exports = {
  answerTwo: pet_owner,
  answerThree: some_pet,
  answerFour: Pet
}

  /////////////////////////////////////////////////////////////

  // You're done! Refer back to README.md.

  /////////////////////////////////////////////////////////////