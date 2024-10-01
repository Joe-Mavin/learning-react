import {React,useState} from 'react'
import ReduxCounter from './src/redusx/reduxCounter'
import { initialStories } from './src/assets/data'
import List2Component from './src/callBackCommunication.jsx/list.component'
import SearhTerm from './src/callBackCommunication.jsx/searhTerm'
import CardsComponent from './src/components/cards.component'
import ListComponent from './src/components/list.components'
import SearchLiftComponrnt from './src/LiftingUpState/searchLiftComponent'
import SearchComp from './src/Practice/comp1'
import Profilecomponent from './src/Props/profile.components'
import ToggleMessage from './src/State/booleanUseState'
import EventHandler from './src/State/eventhandling'
import EventHandlerState from './src/State/eventHandlingState'
import ExampleDependency from './src/useEffect/dependancyAndrReactivity'
import Counter from './src/useReducer/counter'
import TodoApp from './src/useReducer/todos'
import UndoRedoApp from './src/useReducer/undoredo'

const App = () => {
  const [callBackSearch,setCallBackSearch] = useState('')
  const [searchLiftTerm,setSearchLiftTerm] = useState('')//lifting up state
  const [LiftSearch,setLiftSearch] = useState('')

  //Getting Search Term From Search Component 
  const holdSearch = (searchTerm) => {
    setCallBackSearch(searchTerm)
  }

  const HandleLiftSearch = (searchInput) => {
    setLiftSearch(searchInput)
  }

  const handleChange = (event) => {//For lifting Up state
    setSearchLiftTerm(event.target.value)
  }

  return (
    <div>
      <h1>Learning Components</h1>
      <p>Hello I am The Main Enry Point</p>
      <CardsComponent />
      <ListComponent/>
      <h1>Learning Props</h1>
      <Profilecomponent />
      <h1>Learning Event Handlers</h1>
      <EventHandler/>
      <h1>Learning States</h1>
      <EventHandlerState/>
      <ToggleMessage/>
    
      <h1>Learning Callback Communication-Parent to Child</h1>
      <SearhTerm onSearchTermChange =  {holdSearch} />
      <p>ARE YOU THERE {callBackSearch}?</p>
      <List2Component list = {initialStories}/>

      <h1>Learnig Lifting Up Components</h1>
      <SearchLiftComponrnt searchLiftTerm={searchLiftTerm} onSearchTermChange={handleChange}/>
      <p>Test:{searchLiftTerm}</p>

      <h1>Learning UseEffect(simulating an Api data fetch)</h1>
      <ExampleDependency/>
      <h1>Never Mind just practicing</h1>
      <SearchComp WhenSearch = {HandleLiftSearch}/>
      <p>Searching:{LiftSearch}</p>
      <h1>We are Leaning useReducers</h1>
      <Counter />
      <TodoApp/>
      <UndoRedoApp/>
      <h1>State management with Redux</h1>
      <ReduxCounter/>
    </div>
  )
}

export default App
