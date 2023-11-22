import React from 'react'
import { useRef, useState } from 'react'
import studInfo from '../models/studInfo'

function AddStudent() {

    const [studList,setStudList] = useState(studInfo);
    const [nameInfo,setNameInfo] = useState('');
    const [idInfo,setidInfo] = useState('');
    const [gradeInfo,setGradeInfo] = useState('');
    
    const graderef = useRef();
    const nameref = useRef();
    const idref = useRef();
    
    const addStudents = () => {
     //Appending new lists with the old students list
    setStudList(studInfo => [...studInfo,{name:nameref.current.value,Id:idref.current.value,Grade:graderef.current.value}])
    setNameInfo('');
    setidInfo('');
    setGradeInfo('');
    };

    const handleChangename = (event) => {
        setNameInfo(event.target.value)
    }
    const handleChangeId = (event) => {
        setidInfo(event.target.value)
    }
    const handleChangegrade = (event) => {
        setGradeInfo(event.target.value)
    }


  return (
    <>
    <div className='title-div'>
        <h1>Add Student to the Grade Book</h1>
    </div>

     <div className='add-stud-div'>
        <label>Enter Student Name</label>  
        <input type ='text' value={nameInfo} ref={nameref} onChange={handleChangename} ></input> <br></br>
        <label>Enter Student IdNum</label>  
        <input type='text' value={idInfo} ref={idref} onChange={handleChangeId}></input><br></br>
        <label>Enter Student Grade</label>  
        <input type ="text" value={gradeInfo} ref={graderef} onChange={handleChangegrade}></input><br></br>
        <button onClick={addStudents}>Add Student</button>
    </div>

    <div className='stud-display-div'>
    <div className='title-div'><h2>Student Grade Book</h2> </div>
    <div>
        <h2>Name--------------------------------------------Id--------------------------------------------Grade</h2></div>
   
        {
         
        studList.map((studs) => {
            console.log(studs.name);
            console.log(studs.Id);
            console.log(studs.Grade);
           
            return(
            <div className='stud-display-div' style={{ display: "flex", justifyContent: "space-evenly" }}>
                
                <div><h3>{studs.name}</h3></div>
                <div>{studs.Id}</div>
                <div>{studs.Grade}</div>
            </div>
            )

        })
       }
    </div>
    </>
  )
}

export default AddStudent