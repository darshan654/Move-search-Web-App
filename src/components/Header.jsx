import React from 'react';

const Header = ({ setQuery, handleSearch }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Movie Search App</h1>
      <div className="flex">
        <input
          type="text"
          className="form-control p-2 text-black"
          placeholder="Search Movie Title..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-yellow-500 text-black p-2 ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
