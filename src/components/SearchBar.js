import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="search-bar">
      <div className="search-wrapper">
        <label className="form-label">Search a character</label>
        <input
          type="text"
          placeholder="Search for a character"
          className="form-control"
        />

      </div>
      </div>
    </>
  );
};

export default SearchBar;
