import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { FaTimes } from "react-icons/fa";
import { DateFilterFormProps } from "../Utils/types";
import { dateFilter } from "../Utils/dateFilter";

function DateFilterForm({
  toggleFilterForm,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setFilterDates,
  campaigns,
  setCampaigns,
}: DateFilterFormProps) {
  const handleSave = async () => {
    console.log(startDate);
    setFilterDates({ startDate, endDate });
    const result = await dateFilter(campaigns, startDate, endDate);
    console.log(campaigns, startDate, endDate);
    console.log(result);
    setCampaigns(result);
    console.log(campaigns);
  };
  return (
    <div className="dateFilterForm">
      <button type="button" onClick={toggleFilterForm}>
        <FaTimes />
      </button>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
      >
        <label>Start date:</label>
        <DatePicker value={startDate} onChange={setStartDate} />
        <label>End date:</label>
        <DatePicker
          value={endDate}
          onChange={setEndDate}
          minDate={startDate}
          disabled={startDate === undefined}
        />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
}

export default DateFilterForm;
