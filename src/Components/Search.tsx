import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { search } from "../Utils/search";
import { data } from "../Utils/data";

function Search({ setCampaigns, campaigns }) {
  const [input, setInput] = useState("");

  const onSearch = async (string: string) => {
    console.log(input);
    const resultCampaigns = await search({ campaigns }, string);
    setCampaigns(resultCampaigns);
  };

  return (
    <form className="search">
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <p>{input}</p>
      <button
        type="submit"
        onSubmit={(e) => {
          e.preventDefault;
          onSearch({ input });
        }}
      >
        <FaSearch />
      </button>
    </form>
  );
}

export default Search;
