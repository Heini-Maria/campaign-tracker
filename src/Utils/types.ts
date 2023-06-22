export interface Campaign {
  id: number,
  name: string,
  startDate: string,
  endDate: string,
  Budget: number,
}

export type Campaigns = Campaign[];

export interface CampaignProps {
  campaign: Campaign
}
export interface CampaignsProps {
  campaigns: Campaigns
}

export interface SearchProps {
  setCampaigns: React.Dispatch<React.SetStateAction<Campaigns>>;
  campaigns: Campaigns;
}

export interface DateFilterFormProps {
  toggleFilterForm: React.MouseEventHandler<HTMLButtonElement>;
}
