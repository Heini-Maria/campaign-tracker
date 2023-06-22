import React from "react";
import Search from "./Search";
import { SearchProps } from "../Utils/types";

function Header({ campaigns, setCampaigns }: SearchProps) {
  return (
    <header>
      <h1>Campaign tracker</h1>
      <Search campaigns={campaigns} setCampaigns={setCampaigns} />
    </header>
  );
}

export default Header;
