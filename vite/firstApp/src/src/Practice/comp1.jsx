import React, { useState } from "react";

const SearchComp = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    props.whenSearch(searchInput);
  };
  const HandleClick = () => {
    console.log("I Cant Help right now!😒");
    alert("I Cant Help right now!😒");
  };
  return (
    <div>
      <label htmlFor="Search Box"></label>
      <input
        type="text"
        placeholder="search something"
        onChange={handleChange}
      />
      <button onClick={HandleClick}>Search</button>
      <p>We are Searching:{searchInput}</p>
    </div>
  );
};

export default SearchComp;
