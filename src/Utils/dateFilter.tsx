import { Campaigns } from "./types";

export const dateFilter = (campaigns: Campaigns, endDate: Date, startDate: Date) => {
  const result = campaigns.filter(
    (campaign) => new Date(campaign.endDate) <= endDate
      && new Date(campaign.startDate) >= startDate,
  );
  return result;
};
export const formattedDate = (date : Date) => {
  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());
  const year = String(date.getFullYear());

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return `${day}/${month}/${year}`;
};
