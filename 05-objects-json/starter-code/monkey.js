class Monkey {
    constructor(name, species, foodsEaten){
      this.name = name;
      this.species = species;
      this.foodsEaten = foodsEaten;
    }
  
    getname(){
      return this.name;
    }
  
    setname(name){
       this.name = name;
    }
  
    getspecies(){
      return this.species;
    }
  
    setspecies(species){
       this.species = species;
    }
  
    getfoodsEaten(){
      return this.foodsEaten;
    }
  
    eatSomething(thingAsString){
      this.foodsEaten = thingAsString;
    }
  
    introduce(){
      return ("Name:" + this.getname() + "\n" + 
             "Species:" + this.getspecies() + "\n" + 
             "foodsEaten:" + this.getfoodsEaten() + "\n") ;
    }
  }
  
  var m = new Monkey("Monkey", "shampanse", "panana");
  console.log(m.introduce());