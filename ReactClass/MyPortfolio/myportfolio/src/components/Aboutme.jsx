import React from 'react'
import { ProffessionalSummary } from '../models/info'

function Aboutme() {
  return (
    <div style={{ display: "flex",justifyContent: "space-around", textAlign: "center" }}>

    <div>
        <h3>Proffessional Experience</h3>
        <p>-----------------------------</p><br>
        </br>
        <div style={{ justifyContent: "space-around", textAlign: "left"}}>
         { ProffessionalSummary.map((element) => (
            <li>{element}</li>))}
            
          </div>
        
    </div>

    </div>
  )
}

export default Aboutme