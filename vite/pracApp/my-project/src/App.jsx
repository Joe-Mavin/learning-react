import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/components/customComponents.jsx/reussableComponent.css'
import SearchComponent from './components/searchComponent'
import Component1 from './components/component1'
import ReusableButtonComponent from './components/customComponents.jsx/reussableComponent'
import EventComponent from './components/customComponents.jsx/EventComponent'
import LoginForm from './components/customComponents.jsx/formComponent'
import LoginForm2 from './components/customComponents.jsx/Forms/loginForm'
import Forms from './components/useReducers/forms'
import MultipleForms from './components/FormHandlingPractice/MultipleForms'
import useCustomForm from './components/FormHandlingPractice/customForm'
import CustomForms from './components/FormHandlingPractice/customForms'
import TodoApp from './components/useReducers/todos'

function App() {

  const[searchVal,setSearchVal] = useState('')
  const[count,setCount] = useState(0)
   return (
    <>
      <SearchComponent onSearchTermChange = {(inputVal) => {
        setSearchVal(inputVal)
      }} />
      <p>Pulled this value:{searchVal}</p>
      <Component1 count = {count} setCount = {setCount} />
      <ReusableButtonComponent type = 'submit' color= 'blue' value='Button'/>
      <ReusableButtonComponent type = 'text' color ='red' value="Blue"/>
      <EventComponent/>
      <LoginForm/>
      <LoginForm2/>
      <h1>Learning Use Reducers</h1>
      <Forms />
      <h2>Still Practicing Forms</h2>
      <MultipleForms/>
      <h2>Still Practising Custom Hooks</h2>
      <CustomForms/>
      <h2>Todo App</h2>
      <TodoApp/>
    </>
  )
}

export default App
