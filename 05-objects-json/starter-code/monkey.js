// Work with a partner to create a monkey object, which has the following properties:

// name
// species
// foodsEaten
// And the following methods:

// eatSomething(thingAsString)
// introduce: producers a string introducing itself, including its name, species, and what it's eaten.
// Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

// Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and brackets).


var Monkey = function(name, species, foodsEaten){
    this.name= name
    this.species= species
    this.foodsEaten= foodsEaten
  
  
    Monkey.eatSomething = function(thingAsString){
      console.log( "I am eating " + thingAsString)
    }    
  
    Monkey.introduce= function(){
      console.log ("My name is " + name + ". I am from the " + species + " species and I eat " + foodsEaten +".")
    }
  }
  
  
  var Monkey1= new Monkey ('Bob', 'mandrill', 'berries')
  var Monkey3= new Monkey ('Abi', 'Gibbon', 'fruits' )
  var Monkey2= new Monkey ('Luka', 'Baboons', 'birds')
  
  // console.log(Monkey1)
  // console.log(Monkey2)
  // console.log(Monkey3)
  
  // Monkey.introduce(Monkey2)
  // Monkey.introduce(Monkey2)
  Monkey.introduce(Monkey2)
  
  Monkey.eatSomething('banana')
  Monkey['eatSomething']('banana')
  