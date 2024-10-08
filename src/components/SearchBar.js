// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ stocks, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredStocks = stocks.filter((stock) =>
      stock.name.toLowerCase().includes(query)
    );
    onSearch(filteredStocks);
  };

  return (
    <input
      type="text"
      placeholder="Search stocks..."
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
