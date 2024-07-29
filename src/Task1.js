import axios from 'axios'
import React, { useState } from 'react'

export default function Task1() {
    const[state,setState]=useState([''])
    axios.get('https://api.artic.edu/api/v1/artworks')
    .then((res) => {
       //console.log(res.data);
       setState(res.data.results)
    })
  return (
    <div>
      {state.id}    
      </div>
  )
}
