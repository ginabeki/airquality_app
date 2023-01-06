/* eslint-disable react/prop-types */
import React from 'react';

const SearchBar = ({ search, setSearch, handleSearch }) => (
  <div className="pt-10 mx-auto max-w-md ">
    <form
      action=""
      onSubmit={(e) => handleSearch(e)}
      style={{ position: 'relative' }}
    >
      <input
        style={{ position: 'relative', padding: '0.5rem' }}
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
    </form>
  </div>
);
export default SearchBar;
