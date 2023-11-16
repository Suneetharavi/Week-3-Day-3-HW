import React from 'react'
import { Edu } from '../models/info';

function Education() {
  return (
    <div style={{ display: "flex",justifyContent: "space-around", textAlign: "center" }}>

      <div>
         <h3 >Education</h3>
        <p>--------------------------------</p> 
            <div style={{ justifyContent: "space-around", textAlign: 'left'}}>
                    {Edu.map((element) => (
                      <li>{element}</li>))}
            </div>
      </div>
</div>
  );
}
export default Education;

//  {/* <div style={{ display: "flex",justifyContent: "space-around", textAlign: "center" }}> */}

//     {/* <div>
//         <h3>Proffessional Experience</h3>
//         <p>-----------------------------</p><br>
//         </br>
//         <div style={{ justifyContent: "space-around", textAlign: "left"}}>
//          { ProffessionalSummary.map((element) => (
//             <li>{element}</li>))}
            
//           </div>
        
//     </div> */}