import React from "react";
import { CharConsumer } from "../context";

const SearchBar = () => {
   const [search, setSearch] = React.useState("");
   const { filterCharacters } =  CharConsumer();

  const handleChange = (e) => {
    setSearch(e.target.value);
  //  console.log(search);
    filterCharacters(search);
  } 
     

  return (
    <>
      <div className="search-bar">
      <div className="search-wrapper">
        <label className="form-label">Search a character</label>
        <input
          type="text"
          placeholder="Search for a character"
          className="form-control"
          onChange={handleChange}
        />

      </div>
      </div>
    </>
  );
};

export default SearchBar;
