// Create an object called calculator. 
// Inside your object give your object a brand name as a property and methods named add, subtract, divide, and multiply.
//  Make sure to add the necessary parameters to your methods and logic. 
//  Invoke your methods to test to make sure they run!

// const calculator={
//     Brandname:"Property",
//     method:['add','subtrct','divide','multiply']
//     }

//     console.log(calculator.Brandname);

//     for (let i=0; i < calculator.method.length; i++) {
//    console.log(calculator.method[i]);
// }



// const adventure = {
//     name: 'Teo',
//     hitpoints: 20,
//     belongings: ['bow','arrows','bread'],
//     companions:{
//         name: 'Valma',
//         type: 'Bat',
    
//     companions:{
//         name: 'Tim',
//         type: 'Parasite',
//         belongings: ['SCUBA tank', 'Rangan','Health Insurance']
//     }
//  }
// }

// //Access our belomgings
// console.log(adventure.belongings)

// //Acess bread
// console.log(adventure.belongings[2])

// //loop over belongings
// for(let i=0;i<adventure.belongings.length;i++)
// {
//     console.log(adventure.belongings[i])
// }

// //Access companion
// console.log(adventure.companions)
// //Access companion name
// console.log(adventure.companions.name)
// //Access companion types
// console.log(adventure.companions.type)

// //Access companion types
// console.log(adventure.companions.companions.type)
// //Access companion types in campanion campanin(tim)
// console.log(adventure.companions.companions.belongings)

//Use an array of Objects

// const movies = [
//    { title: 'RRR'},
//    { title: 'Dune'},
//    { title: 'Kingdom'}
// ]

// //get Dune
// console.log(movies[1]) 
// //get title of Dune 
// console.log(movies[1].title)

// movies.forEach((movie)=>{
//     console.log(movie.title)
// })

//combine Objects ,Arrays,and functions
// const foo = {
//     someArray:[1,2,3]
// };
// foo.someArray[0]; //1

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// foo.someObject.someProperty; //oh hai!

// const foo = {
//     someMethod:()=>{
//         console.log('oh hai');
//     }
// };

// foo.someMethod();//logs 'oh hai!'

// const foo = [{someProperty:'weee'}, 2, 3];

// console.log(foo[0].someProperty);

// const foo5 = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];
// for( let i=0;i<foo5.length;i++)
// for(j=0;j<foo5[i].length;j++)
// console.log(foo5[i][j]); 

// foo5.forEach((obj) => {
//     obj.forEach((ob) => console.log(ob))
//     });

//     for(let bar of foo5)
//   for(let baz of bar)
//     console.log(baz);
// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log('fun');
//     }
// ];

// console.log(foo[2]());

// class Character {
  
//       legs = 2;
//       arms = 2;
//       eyes = 'hazel';
//       hair = 'gray';
    
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }
//   const me = new Character();
//   console.log(me);
//   const me2 = new Character();
//   console.log(me2);

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Arthur the Wavy', 32, 'his waves be spinnin keep of the g for greatness');
//   console.log(me);
//   console.log(you);
  
//   class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Greetings ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
  
//   me.classyGreeting(you);
//   you.classyGreeting(me);


  //extends
//   class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Howdy ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('i smited thee.');
//     }
  
//   }
//    const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
//   console.log(hobbit);

//   class Hobbit extends Character {
//     steal () {
//       console.log('lets get away!');
//     }
//   }
//   const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
//   console.log(frodo);
//   frodo.smite();
//   frodo.steal();


  //factory
//   class Car {
//     constructor (maker, serialNumber) {
//       this.serialNumber = serialNumber;
//       this.maker = maker
//     }
//     drive () {
//       console.log('Vroom Vroom');
//     }
//   }
  
//   const newCar = new Car('Mazda', 12345);
//   console.log(newCar);

function numArgs() { 
    console.log(arguments.length);
  } 