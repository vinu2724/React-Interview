import React, { useState, useContext } from "react";
import "./SearcBar.css";
import { SearchContext } from "../../SearchContext/SearchContext";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const handleSearch = () => {
    setSearchTerm(query);
    console.log(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button className="search-button" onClick={handleSearch}>
        🔍 {/* Search Icon */}
      </button>
      <button className="mic-button">🎤 {/* Mic Icon */}</button>
    </div>
  );
};

export default SearchBar;
