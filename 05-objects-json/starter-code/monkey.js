class Monkey{

    constructor(name, species, foodsEaten){
        this._name = name;
        this._species = species;
        this._foodsEaten = foodsEaten;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get species(){
        return this._species;
    }

    set species(species){
        this._species = species;
    }

    get foodsEaten(){
        return this._foodsEaten;
    }

    set foodsEaten(foodsEaten){
        this._foodsEaten = foodsEaten;
    }

    eatSomething(thing){
        this._foodsEaten += " ,"+" "+thing
    }

    introduce(){
        // return `Hi my name is ${this._name} I am a ${this._species} I have Eaten ${this._foodsEaten}`
        return this.name + " " + this.species + " " + this.foodsEaten
    }

}

var m = new Monkey("Ss","Champanzi"," Apple");
m.eatSomething("Banana")
console.log(m.introduce());