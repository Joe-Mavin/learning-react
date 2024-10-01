import React, { useReducer } from 'react'
const ACTIONS = {
    UPDATE_FORM:'update-form',
    RESET:'reset'
}
const formReducer = (state,action) => {
    switch(action.type){
        case ACTIONS.UPDATE_FORM:
            return {...state,[action.field]:action.value};
        case ACTIONS.RESET:
            return {}
    }
}

const FormUseReducer = () => {
    const[state,dispatch] = useReducer(formReducer,initialState)
  return (
    <div>
      
    </div>
  )
}

export default FormUseReducer
