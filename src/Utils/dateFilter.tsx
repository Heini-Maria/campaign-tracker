import { Campaigns } from "./types";

export const dateFilter = (campaigns : Campaigns, endDate: Date, startDate: Date) => {
  const dateStart = new Date(startDate);
  const dateEnd = new Date(endDate);
  const result = campaigns.filter(
    (campaign) =>
      new Date(campaign.endDate) <= endDate &&
      new Date(campaign.startDate) >= startDate
  );
  return result;
};
