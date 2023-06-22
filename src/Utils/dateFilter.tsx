import { Campaigns } from "./types";

export const dateFilter = (campaigns : Campaigns, endDate: string, startDate: string) => {
  const dateStart = new Date(startDate);
  const dateEnd = new Date(endDate);
  const result = campaigns.filter(
    (campaign) =>
      new Date(campaign.endDate) <= dateEnd &&
      new Date(campaign.startDate) >= dateStart
  );
  return result;
};
