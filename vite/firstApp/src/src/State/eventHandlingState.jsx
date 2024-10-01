import React, { useState } from "react";

const EventHandlerState = () => {
  const [count, setCount] = useState(0);
  const [inputVal,setInputVal] = useState('')

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChange = (event) => {
    console.log(event.target.value)
    setInputVal(event.target.value)
  }
  return (
    <div>
      <p>I have been clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
      <input type="text" onChange = {handleChange} />
      <p>I am changing:{inputVal}</p>
    </div>
  );
};

export default EventHandlerState;
