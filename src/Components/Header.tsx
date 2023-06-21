import React from "react";
import Search from "./Search";

function Header({ campaigns, setCampaigns }) {
  return (
    <header>
      <h1>Campaign tracker</h1>
      <Search campaigns={campaigns} setCampaigns={setCampaigns} />
    </header>
  );
}

export default Header;
