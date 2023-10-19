// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)
// Inheritance


// class Governer
//     {
//         constructor()
//         {
//         this.power='Appoint'
//         this.funds=50000
//         this.shares='50%'
//         }
//         static legislativepower()
//         {
//             console.log("I am In Static zlegislative Power")
//         }

//     }
//     console.log(Governer.power)
//     Governer.legislativepower()

// Your base class-Person
// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class Person{
    constructor()
    {
        this.legs=2
        this.hands=2
        this.mouth=1
    }
}

class PostalWorker extends Person
{
   setmethod()
   {
      console.log("I am Postalworker class")
   }  
   sethaircolour()
   {
    console.log("I am Postalworker sethaircolor method")
   }
}

class Chef extends Person
{
   setchef()
   {
      console.log("I am setchef class")
   }  
   setchefcolour()
   {
    console.log("I am chef setchefcolor method")
   }
}

const me= new Person()
const me1=new Person()




