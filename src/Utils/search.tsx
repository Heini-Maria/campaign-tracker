import { campaignProps } from "../Components/CampaignItem";

export const search = (array: campaignProps[], input: string) => {
  const result = array.filter((campaign) => campaign.name === input);
  return result;
};
