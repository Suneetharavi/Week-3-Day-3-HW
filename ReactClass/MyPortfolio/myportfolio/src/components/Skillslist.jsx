import React from 'react'
import myInfo from '../models/info'

function Skillslist(props) {
  return (
    <div style = { { display:'flex', alignItems:'left',justifyContent: "space-around"  } } >
        <div>
          <h3>Technical Skills</h3>
          <p >--------------------------------------------------</p>
      <div>
          
         <h4>Coding Languages:</h4>
          <ul>
            {myInfo.CodingLanguages.map((element,index) => (
            <li key={index}>{element}</li>
            ))}
          </ul>
      
          </div>
        <div>
          <h4>Database:</h4>
           <ul>
            {myInfo.Database.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul> 
     </div>

       
          <h4>VersionControl:</h4>
          <ul>
            {myInfo.VersionControl.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
  
</div>
  </div>
  )
}

export default Skillslist