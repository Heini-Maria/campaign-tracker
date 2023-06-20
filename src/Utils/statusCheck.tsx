export const statusCheck = (endDate) => {
  const dateNow = new Date();
  const dateEnd = new Date(endDate);
  if (dateNow > dateEnd) {
    return false;
  }
  return true;
};
