import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { FaTimes } from "react-icons/fa";
import { DateFilterFormProps } from "../Utils/types";

function DateFilterForm({
  toggleFilterForm,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setFilterDates,
}: DateFilterFormProps) {
  const handleSave = () => {
    setFilterDates({ startDate, endDate });
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
