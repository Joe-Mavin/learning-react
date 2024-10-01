import React from 'react'
import useCustomForm from './customForm'

const CustomForms = () => {
    const {state,HandleChange} = useCustomForm({username:'',password:'',email:''})
    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted:',state)
    }
  return (
    <>
    <form onSubmit={HandleSubmit}>
    <label>Username:</label>
    <input type="text" name="username" onChange={HandleChange} />  
    <label>Email:</label>
    <input type="text"name="email" onChange={HandleChange}/>
    <label>Password:</label>
    <input type="text" name="password" onChange={HandleChange} />
    </form>
    <button onClick={HandleSubmit} type="submit">Login</button>
    </>
  )
}

export default CustomForms
