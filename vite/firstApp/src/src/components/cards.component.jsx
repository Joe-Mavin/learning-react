import React from 'react'
import {cat1,cat2,cat3,cat4} from '../assets/index'

const CardsComponent = () => {
  const data = {
    fname: 'John',
    sname: 'Doe'
}
  return (
    <div>
      <p>This is my paragraph</p>
      <div>My name is {data.fname} {data.sname}</div>
      <img src={cat1}/> 
      <img src={cat2}/> 
      <img src={cat3}/> 
      <img src={cat4}/> 
    </div>
  )
}

export default CardsComponent
