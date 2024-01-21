import React from 'react'
import { useContext } from 'react'
import {GiftContext} from '../contexts/GiftContext'

function Sister(props) {

  let {present} = useContext(GiftContext)
  console.log(present);

  return (
    <div>
      <h1>Sister gets a </h1>
      <h2>{present[0]}
      & 
      {present[1]}</h2>
    </div>
  )
}

export default Sister