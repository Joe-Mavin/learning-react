import React from 'react'

const Component1 = ({count,setCount}) => {
    const func = () => {
        setCount(count+1)
    }
  return (
    <div>
      <button onClick={func}>Count:{count}</button>
    </div>
  )
}

export default Component1
