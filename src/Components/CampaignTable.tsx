import React, { useState } from "react";
import CampaignItem from "./CampaignItem";
import Filter from "./Filter";
import { Campaign, CampaignsProps } from "../Utils/types";

function Table({ campaigns, setCampaigns }: CampaignsProps) {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className={visible ? "campaignTable campaignTable-small" : "campaignTable campaignTable-normal"}>
      <Filter
        campaigns={campaigns}
        setCampaigns={setCampaigns}
        visible={visible}
        setVisible={setVisible}
      />
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
              key={campaign.id.toString()}
            />
          ))}
        </tbody>
        <tfoot />
      </table>
    </div>
  );
}

export default Table;
