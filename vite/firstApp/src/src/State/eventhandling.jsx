import React from 'react'

const EventHandler = () => {
    const handleClick = () => {
        console.log("I have been clicked")
    }

    const handleChange = (event) => {
        console.log(event.target.value)
    }
  return (
    <div>
        <p>I am a button to be clicked</p>
        <button onClick={handleClick}>Click me</button>
        <input type="text" onChange={handleChange} /> 
    </div>
  )
}

export default EventHandler
