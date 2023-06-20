import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <form className="search">
      <input />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default Search;
