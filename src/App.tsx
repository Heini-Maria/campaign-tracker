import React, { useState, useEffect } from "react";
import { data } from "./Utils/data";
import "App.css";
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
      <CampaignTable campaigns={campaigns} setCampaigns={setCampaigns} />
    </div>
  );
}

export default App;
