import React from 'react'

const ItemComponent = (props) => {
  return (
    <div>
      <li>
        <span><a href={props.item.url}></a>{props.item.title}</span>
        <span>{props.item.author}</span>
        <span>{props.item.num_comments}</span>
        <span>{props.item.objectID}</span>
      </li>
    </div>
  )
}

export default ItemComponent
