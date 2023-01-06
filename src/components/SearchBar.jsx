/* eslint-disable react/prop-types */
import React from 'react';

const SearchBar = ({ search, setSearch, handleSearch }) => (
  <div className="pt-10 mx-auto max-w-md ">
    <form
      action=""
      onSubmit={(e) => handleSearch(e)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <input
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', marginTop: '1rem',
        }}
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
