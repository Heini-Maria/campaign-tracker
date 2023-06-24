import React from "react";
import CampaignItem from "./CampaignItem";
import Filter from "./Filter";
import { Campaign, CampaignsProps } from "../Utils/types";

function Table({ campaigns }: CampaignsProps) {
  return (
    <div className="campaignTable">
      <Filter />
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Budget</th>
          </tr>
          {campaigns.map((campaign: Campaign) => (
            <CampaignItem
              campaign={campaign}
            />
          ))}
        </tbody>
        <tfoot />
      </table>
    </div>
  );
}

export default Table;
