import React,{useState} from 'react'
//We are creating a search component that 
//1.Displays search value
// 2.Pass down the value to the parent component
/*Callback Communication*/
const SearchComponent = (props) => {
    const[inputValue,setInputValue] = useState('')
    const DisplaySearch = (event) => {
        setInputValue(event.target.value)
        console.log(inputValue)
        props.onSearchTermChange(inputValue)
    }
  return (
    <div>
        <input type="text" placeholder='Search something' onChange={DisplaySearch} />
        <p>I am searching:{inputValue}</p>
    </div>
  )
}

export default SearchComponent 
