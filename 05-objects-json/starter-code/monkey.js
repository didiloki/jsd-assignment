class Monkey {
    constructor(name, species, foodEaten) {
        this.name = name;
        this.species = species;
        this.foodEaten = foodEaten
    }

    set eatSomething(thingAsString){
        this.thingAsString = thingAsString;
        return thingAsString;
    }
    monkeyAnimal(){
        return `Mnky name's ${this.name}, it's species is ${this.species} and like to eat ${this.foodEaten}`
    }
}

 
const monkey1 = new Monkey('Bubbles', 'Chimpanzee', Monkey.eatSomething = 'Fruit')
const monkey2 = new Monkey('Albert', 'rhesus macaque', eatSomething = 'insects')
const monkey3 = new Monkey('Clyde', 'orangutan', eatSomething = 'honey')


console.log(monkey1.monkeyAnimal());
console.log(monkey2.monkeyAnimal());
console.log(monkey3.monkeyAnimal());