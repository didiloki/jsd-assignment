class monkk{
    constructor(name , species , foodsEaten){
        this._name = name 
        this._species=species
        this._foodsEaten=foodsEaten
    }
    
     eatSomething(eat) {
        this._foodsEaten+= eat
        
    }
    intro (){
    
        return "hi , my name is :" + this._name + " i'm a " + this._species + ",, "+ this._foodsEaten 
    }
    
    
    
    
    }
    
    var m1 = new monkk("momo" ,"gorela" , " banana")
    console.log(m1._name)
    // console.log(m1.foodsEaten)
    // m1.eatSomething("mooz")
    // console.log(m1.foodsEaten)
    console.log(m1.intro())
    