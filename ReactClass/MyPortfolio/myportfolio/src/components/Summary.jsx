import React from 'react'

function summary(props) {
  return (
    <div style = { {display:'flex', alignItems:'left',justifyContent: "space-around" }}> 

    <div>
         <h3 >Proffessional Summary</h3>
        <p>--------------------------------</p> 
         <p>{props.summary}</p>
    </div>
<br/>
</div>
  )
}

export default summary