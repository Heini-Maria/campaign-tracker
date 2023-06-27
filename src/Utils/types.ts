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
  campaigns: Campaigns;
  setCampaigns: React.Dispatch<React.SetStateAction<Campaigns>>;
}

export interface SearchProps {
  setCampaigns: React.Dispatch<React.SetStateAction<Campaigns>>;
  campaigns: Campaigns;
}

export interface DateFilterFormProps {
  toggleFilterForm: () => void;
  startDate: Date | undefined;
  endDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  setEndDate: (date: Date | undefined) => void;
  setFilterDates: (dates: { startDate: Date; endDate: Date } | undefined) => void;
  campaigns: Campaigns;
  setCampaigns: React.Dispatch<React.SetStateAction<Campaigns>>;
}

export interface FilterItemProps {
  string: string;
  date: Date;
  removeFilter: (string: string) => void;
}
