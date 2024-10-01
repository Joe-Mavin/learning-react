 import React, { useReducer } from 'react'

 const ACTIONS = {
    UPDATE_FIELD:'update_field',
    RESET:'reset'
 }
 const formReducer = (state,action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_FIELD:
            return {...state,[action.field]:action.value}
        case ACTIONS.RESET:
            return {username:'',email:'',password:''}
 }}
 const Forms = () => {
    const initialState = {
        username:'',
        email:'',
        password:'',
    }
    const[state,dispatch] = useReducer(formReducer,initialState)

    const handleInput = (e) => {
        dispatch({type:ACTIONS.UPDATE_FIELD,
            field:e.target.name,
            value:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted:",state)
        alert(`Submitted:Name:${state.username} Email:${state.email} Password:${state.password}}`)
    }
    const handleReset = () => {
        dispatch({type:ACTIONS.RESET})
    }

   return (
     <div>
        <form action="" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name='username' onChange={handleInput}/>
            <label>Email</label>
            <input type="text" name='email' onChange={handleInput}/>
            <label htmlFor="">Password</label>
            <input type="text" name='password' onChange={handleInput}/>
            <button type='submit'>Submit</button>
        </form>
       
     </div>
   )
 }
 
 export default Forms
 