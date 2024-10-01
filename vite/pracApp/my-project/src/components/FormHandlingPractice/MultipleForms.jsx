import React, { useState } from 'react'

const MultipleForms = () => {
  const[state,setState] = useState({username:'',email:'',password:''})
  const HandleChange = (e) => {
    setState({...state,[e.target.name]:e.target.value})
  }
  const HandleSubmit = (e) =>{
    e.preventDefault()
    console.log('Submitted',state)
    alert(`My name is:${state.username},my email:${state.email} and Password:${state.password}`)
  }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <label>Username</label>
        <input type="text" onChange={HandleChange} name="username"/>
        <label>Email</label>
        <input type="text" onChange={HandleChange} name='email' />
        <label>Password</label>
        <input type="text" onChange={HandleChange} name='password' />
      </form>
      <button type = 'submit' onClick={HandleSubmit}>Log In</button>
    </>
  )
  }

  

export default MultipleForms
