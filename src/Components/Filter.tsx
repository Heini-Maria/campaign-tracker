import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import DateFilterForm from "./DateFilterForm";
import FilterItem from "./FilterItem";
import { CampaignsProps } from "../Utils/types";
import { dateFilter } from "../Utils/dateFilter";
import { data } from "../Utils/data";

function Filter({ campaigns, setCampaigns } : CampaignsProps) {
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [filterDates, setFilterDates] = useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({ startDate: undefined, endDate: undefined });

  const removeFilter = async (string: string) => {
    if (string === "Starting after") {
      setFilterDates({ ...filterDates, startDate: undefined });
      setStartDate(undefined);
    } else {
      setFilterDates({ ...filterDates, endDate: undefined });
      setEndDate(undefined);
    }
  };

  useEffect(() => {
    const result = dateFilter(data, endDate, startDate);
    setCampaigns(result);
  }, [filterDates]);

  const toggleFilterForm = () => {
    setVisible(!visible);
  };

  return (
    <div className="filter">
      <button type="button" onClick={toggleFilterForm}>
        <FaFilter />
      </button>
      {filterDates.startDate && startDate ? <FilterItem string="Starting after" date={filterDates.startDate} removeFilter={removeFilter} /> : null}
      {filterDates.endDate && endDate ? <FilterItem string="Ending before" date={filterDates.endDate} removeFilter={removeFilter} /> : null}
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
