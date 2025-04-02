import React, { useState } from "react";
import "./SearcBar.css";
const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button className="search-button">🔍 {/* Search Icon */}</button>
      <button className="mic-button">🎤 {/* Mic Icon */}</button>
    </div>
  );
};

export default SearchBar;
