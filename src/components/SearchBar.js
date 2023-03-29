import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // action à effectuer lors de la soumission du formulaire de recherche
    console.log("Recherche soumise : ", searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Recherche :</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Entrez votre recherche"
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
