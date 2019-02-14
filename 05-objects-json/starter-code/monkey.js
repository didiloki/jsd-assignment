function Monkey(name, species, foodsEaten) {
    this.name = name;
    this.species = species;
    this.foodsEaten = foodsEaten;
}

Monkey.prototype.eatSomething = function(food){
  console.log("eats " + food)

Monkey.prototype.introduce = function(name, species, foodsEaten) {
    console.log(`I am ${name}. I am part of the ${species} species, and have eaten ${foodsEaten}`);
  }
}


let monkey01 = new Monkey("chimp", "chimpanzee", "honey");
let monkey02 = new Monkey("babo", "babbon", "apple");
let monkey03 = new Monkey("gibb", "gibbon", "banana");

console.log(monkey01);
