import React from 'react'
import { useContext } from 'react'
import { GiftContext } from '../contexts/GiftContext'

function Neice(props) {

  let {present} = useContext(GiftContext)

  return (
    <div>
      <h1>Neice gets </h1>
      <h2>{present[3]}</h2>
      
    </div>
  )
}

export default Neice

