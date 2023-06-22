export const dateFilter = (campaigns, endDate, startDate) => {
  const dateStart = new Date(startDate);
  const dateEnd = new Date(endDate);
  const result = campaigns.filter(
    (campaign) =>
      new Date(campaign.endDate) <= dateEnd &&
      new Date(campaign.startDate) >= dateStart
  );
  return result;
};
