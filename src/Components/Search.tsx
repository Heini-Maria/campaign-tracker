import React from "react";
import { FaSearch } from "react-icons/fa";
import { search } from "../Utils/search";
import { data } from "../Utils/data";
import { SearchProps } from "../Utils/types";

function Search({ setCampaigns, campaigns }: SearchProps) {
  const onSearch = async (input: string) => {
    if (input.length > 0) {
      const resultCampaigns = await search(campaigns, input);
      setCampaigns(resultCampaigns);
    } else {
      setCampaigns(data);
    }
  };

  return (
    <form
      className="search"

    >
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault();
          onSearch(e.target.value);
        }}
      />
      <button
        type="submit"
      >
        <FaSearch />
      </button>
    </form>
  );
}

export default Search;
