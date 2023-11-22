import { useRef } from "react"
import './App.css';
import AddStudent from '../src/components/AddStudent';

//image scroll program

function App(){

const listRef = useRef(null);

function scrollToIndex(index) {
  
  const listNode = listRef.current;
  // This line assumes a particular DOM structure:
  const imgNode = listNode.querySelectorAll('li > img')[index];

  imgNode.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  });
 
  console.log(imgNode);
  
}

return (
  <div className='main-div'>

    <div className='add-stud-div'>
           <AddStudent/> 
    </div>

    <div className='view-stud-div'>
        <h2 style={{ display: "flex", justifyContent: "space-evenly",color:'Blue' }}>Click on the Student Name to view their details </h2>
        <nav className="nav"> 
          <button onClick={() => scrollToIndex(0)}>
            Tom
          </button>
          <button onClick={() => scrollToIndex(1)}>
            Smiley
          </button>
          <button onClick={() => scrollToIndex(2)}>
            Roy
          </button>
          <button onClick={() => scrollToIndex(3)}>
            Leo
          </button>
          <button onClick={() => scrollToIndex(4)}>
            Kate
          </button>
          <button onClick={() => scrollToIndex(5)}>
            Sushanth
          </button>
        </nav>
        <div style={{ display: "flex", justifyContent: "space-evenly",color:'Blue' }}>
          <ul ref={listRef}>
            <li>
              <h3> Tommy Scores grade A+</h3>
              <img
                src="https://images.ctfassets.net/vztl6s0hp3ro/2Zg9Mth4qC5EGGWHoJIy9T/3f0dbdf8884231a3e9e7998c514cc1fa/Unleash-employee-potential-with-personal-professional-development-examples.jpg"
                alt="Tom"
                width={300}
              />
            </li>
            <li>
            <h3> Smiley Scores grade A</h3>
              <img
                src="https://media.istockphoto.com/id/1422684645/photo/happy-funky-and-retro-portrait-of-gen-z-woman-or-student-on-a-purple-background-wall-mockup.jpg?s=612x612&w=0&k=20&c=9tqTao6MKH9kEE9-QwU8YdZzbKq1hlKxOq6ElRK-Wr8="
                alt="Smiley"
                width={300}
              />
            </li>
            <li>
            <h3> Roy Scores grade B</h3>
              <img
                src="https://media.istockphoto.com/id/1278978168/photo/portrait-of-black-guy-in-high-school-class.jpg?s=612x612&w=0&k=20&c=HkVSwOlQzml0EHD22gBk6fnF1x1Aj86_brgSxhXULmU="
                alt="Roy"
                width={300}
              />
            </li>
            <li>
            <h3> Leo Scores grade A+</h3>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nIHQGVX-JWVM71Yk8W1PpjfrIQfbj0_j9g&usqp=CAU"
                alt="Leo"
                width={300}
              />
            </li>
            <li>
            <h3> Kate Scores grade A</h3>
              <img
                src="https://www.viennashots.com/wp-content/uploads/2021/05/0283_Portait_HGI_AL-e1559232363840.jpg"
                alt="Kate"
                width={300}
                height={300}
              />
            </li>
            <li>
            <h3> Sushanth Scores grade A+</h3>
              <img
                src="https://img.freepik.com/free-photo/handsome-young-curly-haired-man-working-laptop-computer-standing-isolated-white-wall_231208-1164.jpg"
                alt="Sushanth"
                width={300}
              />
            </li>
          </ul>
        </div>
    </div>
  </div>
);
}
export default App;



//Code from Jordan's class for reference

// import "./App.css";
// import { useRef } from "react";
// import { useState } from "react";

// function App() {
//   const inputRef = useRef(null);

//   const [currentWord, setCurrentWord] = useState("");

//   const handleChange = () => {
//     let content = inputRef.current.value;
//     console.log("Content: ", content);
//     setCurrentWord(content);
//     console.log(inputRef.current.value);
//   };

//   // -----> Using Arrays
//   const possibleCandidates = [
//     { name: "Superman", gpa: "4.0", cohort: "Metropolis" },
//     { name: "Batman", gpa: "4.0", cohort: "Gotham" },
//     { name: "WonderWoman", gpa: "4.0", cohort: "Athens" },
//     { name: "Mario", gpa: "4.0", cohort: "Italy" },
//     { name: "Luigi", gpa: "4.0", cohort: "Brooklyn" },
//   ];
//   // ----> Mapping
//   const star_Students = possibleCandidates.map((scholar, n) => {
//     return (
//       <div className="recruit" key={n}>
//         <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//           <h3>{scholar.name}</h3>
//           <h3>{scholar.gpa}</h3>
//           <h3>{scholar.cohort}</h3>
//         </div>
//       </div>
//     );
//   });

//   // ------> Using Objects
//   const valedictorian = {
//     name: "Grogu Yoda",
//     age: "00",
//     email: "mandos_baby@jedi.io",
//   };
//   // ----> Mapping
//   const triWiz = Object.keys(valedictorian).map((key, index) => {
//     return (
//       <h1 className="grogu" key={index}>
//         {key}: {valedictorian[key]}
//       </h1>
//     );
//   });

//   return (
//     <div className="App">
//       {/* {star_Students} */}
//       {/* ---> Calling Array Map */}
//       {triWiz}
//       {/* ----> Calling Object Keys */}

//       <input type="text" ref={inputRef} />
     
//       <button onClick={handleChange}>Click This</button>

//       <div>CurrentWord : {currentWord}</div>
//     </div>
//   );
// }


// import React, { useRef, useEffect } from 'react'
// export const Component = ({ items }) => {
//   const itemsEls = useRef(new Array())
  
//   return (
//     {items.map((item) => {
//       const getRef = (element) => (itemsEls.current.push(element))
//       return <p key={getRef}>{item}</p>
//     })}
//   )
// }
// export default App;