import React from "react";
import { data } from "../Utils/data";
import CampaignItem from "./CampaignItem";

function Table() {
  return (
    <table className="campaignTable">
      <thead><tr><th>This is Table</th></tr></thead>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Budget</th>
        </tr>
        {data.map((campaign) => (
          <CampaignItem
            name={campaign.name}
            startDate={campaign.startDate}
            endDate={campaign.endDate}
            Budget={campaign.Budget}
            key={campaign.name}
          />
        ))}
      </tbody>
      <tfoot />
    </table>
  );
}

export default Table;
