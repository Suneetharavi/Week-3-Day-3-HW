// There is only one Governor in the state,
// add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)
//  console.log("\nStatic methods and Properties\n")
 
 class Governer{

    //Static Properties
    static myName="Josh Shapiro"
    static Governernumber='48'
    static bDate='Jan-01-1982'
    //Static Methods
    static state(){
        console.log(" Pennyslvania.")
    }
    static Priorities()
    {
        console.log("“We need leaders who possess the public’s trust. Bill DeWeese does not,” Shapiro said.")
    }
    static Policies()
    {
        console.log("Shapiro also facilitated a settlement between Highmark and UPMC, two healthcare giants who had been in a dispute for years.")
    }

 }
 // log the properties and test the methods (don't instantiate)

 console.log(`The Governer ${Governer.myName}' born on ${Governer.bDate} was the ${Governer.Governernumber}th Governer of`) 
 Governer.state()
 Governer.Policies()
 Governer.Priorities()

//  Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

//Inheritance

class Person{
    //Think of three properties all people share, set them with the constructor
    constructor(name,age,id,profession){
        this.name=name
        this.age=age
        this.id=id
        this.profession=profession
    }
    // Think of three methods all people share
    address(state){
        console.log(`I stay in ${state}`)
    }
    Eat()
    {
        console.log("I eat food")  
    }
    drink()
    {
        console.log("I drink water everyday ")
    }
}
// Create a PostalWorker class that inherits from person, add some methods
class PostalWorker extends Person {
    constructor(name,age,id,profession)
    {
        super(name,age,id,profession);
    }
    deliver()
    {
        console.log("I deliver mails")
    }   
}
// Create a Chef class that inherits from person, add some methods
class Chef extends Person {
    constructor(name,age,id,profession)
    {
        super(name,age,id,profession);
    }
    Chef_at()
    {
        console.log("I am a chef at Olive Gardens")
    }
    food()
    {
        console.log("I cook Yummy food")
    }
}
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
console.log("About Postal Workers")
const Pw1= new PostalWorker('John','35','SSN','PostalWorker')
const Pw2= new PostalWorker('Tom','40','DriversLicence','PostalWorker')
const Chef1= new Chef('Don','43','SSN','Chef')
const Chef2= new Chef('Con','37','RentalInsurance','Chef')
console.log(`I am ${Pw1.name}.\n I am ${Pw1.age} years old.\nI have the ${Pw1.id} Id.\nI am a ${Pw1.profession}.`)
Pw1.deliver()
console.log(`I am ${Pw2.name}.\n I am ${Pw2.age} years old.\nI have the ${Pw2.id} Id.\nI am a ${Pw2.profession}.`)
Pw2.deliver()
console.log("About Postal Workers")
console.log(`I am ${Chef1.name}.\n I am ${Chef1.age} years old.\nI have the ${Chef1.id} Id.\nI am a ${Chef1.profession}.`)
Chef1.Chef_at()
Chef1.food()
console.log(`I am ${Chef2.name}.\n I am ${Chef2.age} years old.\nI have the ${Chef2.id} Id.\nI am a ${Chef2.profession}.`)
Chef2.Chef_at()
Chef2.food()