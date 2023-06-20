import React, { useState, useEffect } from "react";
import { FaRegStopCircle,
  FaRegPlayCircle } from "react-icons/fa";
import { statusCheck } from "../Utils/statusCheck";

interface campaignProps {
    name: string,
    startDate: string,
    endDate: string,
    Budget: number,
}
function CampaignItem({ name, startDate, endDate, Budget }: campaignProps) {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(statusCheck(endDate));
  });
  return (
    <tr className="campaign">
      <td>{name}</td>
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
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>
        {Budget}
        {" "}
        €
      </td>
    </tr>
  );
}

export default CampaignItem;
