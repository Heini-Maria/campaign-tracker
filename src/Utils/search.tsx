import { Campaigns } from "./types";

export const search = (array: Campaigns, input: string) => {
  const inputLower = input.toLowerCase();
  const result = array.filter((campaign) => campaign.name.toLowerCase().includes(inputLower));
  return result;
};
