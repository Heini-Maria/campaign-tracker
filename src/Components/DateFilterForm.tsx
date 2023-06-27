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
  const handleSave = async (starting: Date, ending: Date) => {
    setFilterDates({ startDate: starting, endDate: ending });
    const result = await dateFilter(campaigns, endDate, startDate);
    setCampaigns(result);
  };
  return (
    <div className="dateFilterForm">
      <button type="button" onClick={toggleFilterForm}>
        <FaTimes />
      </button>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSave(startDate, endDate);
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
