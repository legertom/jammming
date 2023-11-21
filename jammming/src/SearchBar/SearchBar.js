import React, {useState} from 'react';

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('');

        //set the term using the value in the input element
    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }
        // call the onSearch method from App.js
    const search = () => {
        onSearch(term);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(term)
    }

    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
            <button className="SearchButton" onClick={search}>SEARCH</button>
            </form>
        </div>
    )
}

export default SearchBar;