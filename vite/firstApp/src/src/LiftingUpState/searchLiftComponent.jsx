import React from 'react'

const SearchLiftComponrnt = ({searchLiftTerm,onSearchTermChange}) => {
  return (
    <div>
        <input type = "text" onChange = {onSearchTermChange}/>
        <p>We are searching: {searchLiftTerm}</p>
    </div>
  )
}

export default SearchLiftComponrnt
