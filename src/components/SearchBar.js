import React from "react";
import { CharConsumer } from "../context";

const SearchBar = () => {
  // codigo viejo 
  // el state search debe ser global no local 
  //  const [search, setSearch] = React.useState("");
  // no necesitas una funcion de filtro !
  //  const { filterCharacters } =  CharConsumer();
    const { setSearch } = CharConsumer();


  const handleChange = (e) => {
    setSearch(e.target.value);
  //  console.log(search);
    // esta funcion no va mas !
    //filterCharacters(search);
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
