import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { FaTimes } from "react-icons/fa";
import { DateFilterFormProps } from "../Utils/types";

function DateFilterForm({ toggleFilterForm }: DateFilterFormProps) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div className="dateFilterForm">
       {console.log(startDate)}
      <button type="button" onClick={toggleFilterForm}>
        <FaTimes />
      </button>
      <form>
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
