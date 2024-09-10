import React from 'react';

const SearchBar = ({ city, setCity, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="submit">Fetch data</button>
    </form>
  );
};

export default SearchBar;
