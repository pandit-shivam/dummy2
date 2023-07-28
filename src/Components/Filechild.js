import React from 'react'
// import { Fileparent } from './Fileparent'

export const Filechild = (props) => {
    console.log(props)
  return (
    <div>this is used for practising the props {props.text}
    <p>My name is {props.name}  and i complete my {props.collage} </p>
    </div>
  )
}
