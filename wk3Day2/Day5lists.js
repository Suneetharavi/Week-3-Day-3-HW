console.log("HI")

// const n1={
//     data:200
    
// }
// const n2={
//     data:300
// }
// const n3={
//     data:400
// }

// n1.next=n2;
// n2.next=n3;
// n3.next=null;
// console.log(n1)

// class Node{
//     constructor(data,next=null){
//         this.data=data
//         this.next=next
//     }
// }
// const n1=new Node(100,200);
// const n2=new Node(200,n1);
// console.log(n1)
// console.log(n2)

// class LinkedList{
//     constructor()
//     {
//         this.head = null
//         this.size=0

//     }
//     insertFirst(data){
//         const current = new Node(data, this.head)
//         console.log(current)
//         this.head=current
//         this.size++
//     }
// }
// const Ll = new LinkedList()
// console.log(Ll)
// Ll.insertFirst(500)

// console.log(Ll)
// Ll.insertFirst(400)
// Ll.insertFirst(300)

// class Node {
//     constructor(data, next = null) {
//         this.data = data
//         this.next = next
//     }
// }

// // const n1 = new Node(100)
// // const n2 = new Node(200, n1)
// // const n3 = new Node(300, n2)
// // console.log(n3)

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     insertFirst(data) {
//         const current = new Node(data, this.head)
//         this.head = current
//         this.size++
//     }
//     getFirst()
//     {
//         return this.head
//     }
//     getLast()
//     {
//         let walker = this.getFirst();
//         while (walker.next) {
//             walker = walker.next;
//     }
//     return walker
//     }

//     clear(){
//         this.head=null;
//         this.size=0
//     }

//     removeFirst()
//     {
//         this.head = this.head.next
//         this.size--
//     }

// }

// const linkedList = new LinkedList()
// console.log('This is our linkedList without a node')
// console.log(linkedList)
// linkedList.insertFirst(100) // assing next to null
// console.log('This is our linkedList with our first node')
// console.log(linkedList)
// linkedList.insertFirst(200)
// console.log('This is our linkedList with our second node')
// console.log(linkedList)

// // get size
// // console.log(linkedList.size)
// //console.log(LinkedList.getSize())

// //get first item on our linkedlist
// console.log(linkedList.getFirst())

// //get Last item on our linkedlist
//  console.log(linkedList.getLast())

// //delete entire list
// // linkedList.clear()
// // console.log(linkedList)

// //Remove first elemnt in list
// linkedList.removeFirst()
//  console.log(linkedList)

// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances
// Constructors

//Creating a Class
class cat
{   
    //Creating Properties for class cat
    breed='catfamily'
    legs=4
    born_date=2020
    eyes=2
    //Creating Methods 
    eat()
    {
        console.log("I drink milk")
    }
    makesound(sound)
    {
        console.log("I sound ${sound} ")
    }
    likes()
    {
        console.log("i like to scratch")
    }
}
 //Ceating Instances for cat class
const Tommy=new cat()
const Niky = new cat()

// log Tommy instances to see their properties
console.log(Tommy.legs)
console.log(Tommy.breed)
console.log(Tommy.eyes)
console.log(Tommy.born_date)

// log Niky instances to see their properties
console.log(Niky.legs)
console.log(Niky.breed)
console.log(Niky.eyes)
console.log(Niky.born_date)
// invoke each method from both instances

console.log(Tommy.makesound(Meau))
console.log(Tommy.likes)
console.log(Tommy.eat)


console.log(Niky.makesound(Meau_Meau))
console.log(Niky.likes)
console.log(Niky.eat)

// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate {

    constructor(){
            this.
    }
  
  }

  
class Cat {
    eyes = 2;
    mouth = 1;
    tail = 1;

    eat(food){
        console.log(`I am eating ${food}, yammymeao`);
    }

    drink(myDrink){
        console.log(`I am drinking ${myDrink}`);
    }

    walk(){
        console.log('walk walk');
    }
}

const tom = new Cat;
const jerry = new Cat;

// console.log(`${tom.eyes} and ${jerry.walk}`)
console.log(tom);
console.log(jerry);

console.log('------- tom --------');
tom.drink("milk");
tom.eat('fish');
tom.walk();
console.log('------- jerry --------');
jerry.drink("water");
jerry.eat('tuna');
jerry.walk();


// -----------------------------Q2---------------------------//

class Pirate {

    constructor(hat, captainName, destination){
        this.hat = hat;
        this.captainName = captainName;
        this.destination = destination;
    }

    sail(){
        console.log(`sail to ${this.destination} with ${this.captainName}`);
    }

    lookingFor(toLookFor){
        console.log(`I'm trying to find the ${toLookFor}`);
    }

    pirateSounds(){
        console.log('yoooo hoooooo');
    }
  
}


const jollyRoger = [new Pirate(true, 'Lofy', 'One Pice'), new Pirate(false, 'Zoro', 'where ever lofy goes'), new Pirate(false, 'yosup', 'does not know')];
const blackPearl = [new Pirate(true, 'Jack Sparow','fountain of youth '), new Pirate(false, 'Abdul', 'no one knows'), new Pirate(true, 'MERN developer', 'VS code')];

jollyRoger.forEach(pirateClass => {
    console.log(pirateClass);
});
blackPearl.forEach(pirateClass => {
    console.log(pirateClass);
});

console.log(jollyRoger[0].lookingFor('One Pice'));

////////////////////////////////////

class Governor {
    static name = "John";
    static age = 45;
    static ssn = 12121212

    static implementation = () => {
        console.log('implementing state laws and overseeing the operation of the state executive branch')
    }
    static newImplementations = () => {
        console.log("As state leaders, governors advance and pursue new and revised policies and programs using a variety of tools")
    }

    static budgeting = () => {
        console.log("Executive budgets, and legislative proposals and vetoes.")
    }
}

console.log(`the Governor ${Governor.name} he is ${Governor.age} and his SSN = ${Governor.ssn}`)
console.log(Governor.implementation())

// ------------------- Inheritance ---------------------------//

class Person{
    constructor(name, eyes, mouth, hair, hands){
        this.name =name;
        this.eyes = 2;
        this.mouth = 1;
        this.hair = hair || true;
        this.hands = 2;
    }

    eat = () => {
        console.log('Yaamyy')
    }

    drink = (drink) => {
        console.log(`I am drinking ${drink}`)
    }

    sleep = () => {
        console.log('ZzzzzZ ZzzzZ')
    }
}

class PostalWorker extends Person {
    constructor(name, eyes, mouth, hair, hands){
        super(name, eyes, mouth, hair, hands);
    }
    
    deliver = () => {
        console.log(' Postal Worker deliver mail')
    }

}

class Chef  extends Person {
    constructor(name, eyes, mouth, hair, hands, hasAHat){
        super(name, eyes, mouth, hair, hands, this.eat);
        this.hasAHat = true;
    }
    
    cook = (cooking = rice) => {
        console.log(`the chef is cooking ${cooking}`);
    }
}

// ----------- PostalWorker ------------//
const tom = new PostalWorker('tom') 
const tommy = new PostalWorker('tommy') 
console.log(`${tom.name} he ${tom.eat()}, ${tom.drink('beers')}, ${tom.sleep()} and ${tom.deliver()} `)