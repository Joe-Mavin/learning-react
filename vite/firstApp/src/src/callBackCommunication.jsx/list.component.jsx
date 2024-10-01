import React from 'react'
import ItemComponent from './item.component'

const List2Component = (props) => {
  return (
    <div>
        <ul>
       {props.list.map((obj) => (
         <ItemComponent key = {obj.objectID} item = {obj}/>
       ))}
        </ul>
    </div>
  )
}

export default List2Component
