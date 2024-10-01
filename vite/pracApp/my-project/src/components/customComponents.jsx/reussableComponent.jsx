import React from 'react'

const ReusableButtonComponent = ({type,value,color}) => {
  return (
    <>
      <button type={type} className={color}>{value}</button>
    </>
  )
}

export default ReusableButtonComponent
