import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import DateFilterForm from "./DateFilterForm";
import FilterItem from "./FilterItem";
import { CampaignsProps } from "../Utils/types";

function Filter({ campaigns, setCampaigns } : CampaignsProps) {
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [filterDates, setFilterDates] = useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({ startDate: undefined, endDate: undefined });

  const toggleFilterForm = () => {
    setVisible(!visible);
  };

  const removeFilter = (string: string) => {
    if (string === "Starting after") {
      setFilterDates({ ...filterDates, startDate: undefined });
    } else {
      setFilterDates({ ...filterDates, endDate: undefined });
    }
  };

  return (
    <div className="filter">
      <button type="button" onClick={toggleFilterForm}>
        <FaFilter />
      </button>
      {filterDates.startDate ? <FilterItem string="Starting after" date={filterDates.startDate.toLocaleDateString()} removeFilter={removeFilter} /> : null}
      {filterDates.endDate ? <FilterItem string="Ending before" date={filterDates.startDate.toLocaleDateString()} removeFilter={removeFilter} /> : null}
      {visible ? (
        <DateFilterForm
          toggleFilterForm={toggleFilterForm}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setFilterDates={setFilterDates}
          campaigns={campaigns}
          setCampaigns={setCampaigns}

        />
      ) : null}
    </div>
  );
}

export default Filter;
