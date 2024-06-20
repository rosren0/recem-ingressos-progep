import React from 'react';
import "./styles.css"

 function SearchBar({ searchTerm, setSearchTerm}) {
  return (

     <div className="search-bar">
      <input
        type="text"
        placeholder="Procure artigos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};