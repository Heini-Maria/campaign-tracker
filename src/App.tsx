import React from "react";
import "App.css";
import Header from "./Components/Header";
import CampaignTable from "./Components/CampaignTable";

function App() {
  return (
    <div className="app">
      <Header />
      <CampaignTable />
    </div>
  );
}

export default App;
