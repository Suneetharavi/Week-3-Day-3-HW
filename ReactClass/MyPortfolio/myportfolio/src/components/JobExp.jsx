import React from 'react'

function JobExp(props) {
  return (
    <div style ={ {display:'flex', alignItems:'left',justifyContent: "space-around" } }>

        <div>
          <h3>Job Experience</h3>
          <p>--------------------</p>
            <p>{props.JobExp[0]}</p>
        </div>
        
    </div>
  )
}

export default JobExp