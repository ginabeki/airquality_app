import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { fetchLocation } from '../redux/searchLocation';
import SearchResults from '../components/searchResults';

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const handleSearch = (e) => {
    e.preventDefault();
    if (addRequestStatus === 'idle') {
      try {
        setAddRequestStatus('pending');
        dispatch(fetchLocation(search)).unwrap();
      } catch (err) {
        throw new Error(err);
      } finally {
        setAddRequestStatus('idle');
        setSearch('');
      }
    }
  };
  return (
    <div className=" relative max-w-[440px] w-[100vw] min-h-[100vh] mx-auto bg-gray-100 opacity-50">
      <SearchBar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <SearchResults search={search} />
    </div>
  );
};

export default Search;
