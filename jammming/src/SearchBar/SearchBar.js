import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  //set the term using the value in the input element
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(term);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={handleTermChange}
        />
        <button type="submit" className="SearchButton">
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
