import React from "react";
import { FaTimes } from "react-icons/fa";
import { DateFilterFormProps } from "../Utils/types";

function DateFilterForm({ toggleFilterForm }: DateFilterFormProps) {
  return (
    <div className="dateFilterForm">
      <button type="button" onClick={toggleFilterForm}>
        <FaTimes />
      </button>
      <form>
        <input />
        <input />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
}

export default DateFilterForm;
