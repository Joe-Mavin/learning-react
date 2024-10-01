import {React,useState} from "react";

const SearhTerm = (props) => {
  const [searhTerm, setsearchTerm] = useState("");
  const handleSearch = (event) => {
    setsearchTerm(event.target.value);
    props.onSearchTermChange(searhTerm);
  };
  return (
    <div>
      <label htmlFor="search">Search Box</label>
      <input type="text" onChange={handleSearch} />
      <p>Searching for : {searhTerm}</p>
    </div>
  );
};

export default SearhTerm;
