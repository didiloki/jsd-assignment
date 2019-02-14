var Monkey_obj = function (name, species, foodsEaten) {
    this._name = name;
    this._species = species;
    this._foodsEaten = foodsEaten;
};

Monkey_obj.prototype.eatSomething = function (food) {
    this._foodsEaten = food;
};

Monkey_obj.prototype.producers = function () {
    return ("Name: " + this._name + " , Species: " + this._species + " , FoodEaten: " + this._foodsEaten)
}


///create objects///
var monkey1 = new Monkey_obj("Monkey 1", "Champanzi", "banana")
monkey1.eatSomething("another banana!")
console.log(monkey1.producers())

var monkey2 = new Monkey_obj("Monkey 2", "Champanzi", "banana")
monkey2.eatSomething("another banana!")
console.log(monkey2.producers())

var monkey3 = new Monkey_obj("Monkey 3", "Champanzi", "banana")
monkey3.eatSomething("another banana!")
console.log(monkey3.producers())