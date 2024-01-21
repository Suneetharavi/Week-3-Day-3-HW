import React from 'react'
import { useContext } from 'react'
import { GiftContext } from '../contexts/GiftContext'

function Brother(props) {

  let {present} = useContext(GiftContext)

  return (
    <div>
      <h1>Brother gets a</h1>
      <h2>{present[4]}</h2>
    </div>
  )
}

export default Brother