import React, { useState, useEffect } from "react";
import "App.css";
import { data } from "./Utils/data";
import Header from "./Components/Header";
import CampaignTable from "./Components/CampaignTable";

function App() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    setCampaigns(data);
  }, []);

  return (
    <div className="app">
      <Header setCampaigns={setCampaigns} campaigns={campaigns} />
      <CampaignTable campaigns={campaigns} />
    </div>
  );
}

export default App;
