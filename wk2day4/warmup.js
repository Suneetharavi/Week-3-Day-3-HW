// for(let i=1;i<=100;i++)
// {
//     if (i%5===0)
//     console.log(i)
//  }


//  let player1='rock' 
//  let player2='rock'
//  if(player1==='rock')
//  {
//     if(player2==='rock')
//       console.log("Its a Tie")
//     else if(player2==='paper')
//     {
//         console.log("Player1 wins")
//     }
//     else if(player2==='scissor')
//     {
//         console.log("Player1 wins")
//     }
//  }
//  if(player1==='paper')
//  {
//     if(player2==='paper')
//       console.log("Its a Tie")
//     else if(player2==='rock')
//     {
//         console.log("Player2 wins")
//     }
//     else if(player2==='scissor')
//     {
//         console.log("Player2 wins")
//     }
//  }
//  if(player1==='scissor')
//  {
//     if(player2==='scissor')
//       console.log("Its a Tie")
//     else if(player2==='rock')
//     {
//         console.log("Player2 wins")
//     }
//     else if(player2==='paper')
//     {
//         console.log("Player1 wins")
//     }
//  }

// let k=1
//  while(k<35)
//  {
//     if(k%3===0)
//     console.log(k)
// k++
//  }

//  let j=1
//  while(j<100)
//  {
//     if(j%5===0)
//     console.log(j)
// j++
//  }

// let z=1

// while(z<20)
// {
//     if(z%2===0)
//     {
//         // let p=z*3
//        console.log(z*3) 
      
//     }
//     z++
// }
 
// let primenumber=" ";
// for(let i=1;i<=100;i++)
// {
//     let count=0;
//     for(num=i;num>=1;num--)
//     {
//         if(i%num===0)
//         {
//             count=count+1;
//         }
//     }
//     if(count===2){
//          primenumber=primenumber+i+" ";
//          console.log(primenumber)
//     }
    
// }

// let x=0
// while(x < 20){
//     if(x < 3){
//         if(x % 2 ===0 ){
//             console.log(x +" is even")
//         } else {
//             console.log(x +" is odd")
//         }
//     } else {
//         if(x % 2 ===0 ){
//             console.log(x +" is even")
//         } else if (x % 3 !== 0 && x % 2 !== 0  ) {
//             console.log(x +" is prime")
//         } else {
//             console.log(x +" is odd")
//         }
//     }
//     x++
// }

// let cookie=4
// let pay=10
// let remainder=0
// let quarters=0
// remainder=pay-cookie
// while(remainder>0)
// {
//     quarters++

// }
// console.log(quaters)

// function add(num1,num2)
// {
//     console.log(num1+num2)
// }
// // add(4,5)
// add(7,9)
// add(-9,566)
// add(4,5,6,7)

// function add(num1,num2,num3)
// {
//     console.log(num1+num2+num3)
// }


// add(7,9,1)

// function add1(num1,num2,num3)
// {
//     console.log((num1+num2+num3)/5)
// }
// add1(7,9,1)


// const addarrow=(x,y)=>{
// x+y;
// }
// console.log(addarrow(7,9));

function useGas()
{
    var MoneyGetpaid=100
    function ps()
    {
        MoneyGetpaid=200
        console.log(MoneyGetpaid+'in ps');
    }
    console.log(MoneyGetpaid+'global');
    ps();
}
useGas()