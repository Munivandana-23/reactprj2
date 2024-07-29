import { context} from "./App"
import React , {useContext} from 'react'
export default function Comp3() {
  let x=useContext(context)
  return (
    <div>
  <h3>welcome to {x}</h3>
    </div>
  )
}
