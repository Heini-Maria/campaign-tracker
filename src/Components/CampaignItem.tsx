import React, { useState, useEffect } from "react";
import { FaRegStopCircle,
  FaRegPlayCircle } from "react-icons/fa";
import { statusCheck } from "../Utils/statusCheck";
import { CampaignProps } from "../Utils/types";

function CampaignItem({ campaign }: CampaignProps) {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(statusCheck(campaign.endDate));
  });
  return (
    <tr className="campaign">
      <td>{campaign.name}</td>
      {status ? (
        <td className="active">
          <FaRegPlayCircle />
          Active
        </td>
      ) : (
        <td className="inactive">
          <FaRegStopCircle />
          Inactive
        </td>
      )}
      <td>{campaign.startDate}</td>
      <td>{campaign.endDate}</td>
      <td>
        {campaign.Budget}
        {" "}
        €
      </td>
    </tr>
  );
}

export default CampaignItem;
