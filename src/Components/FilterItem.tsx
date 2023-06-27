import React from "react";
import { FaTimes } from "react-icons/fa";
import { formattedDate } from "../Utils/dateFilter";
import { FilterItemProps } from "../Utils/types";

function FilterItem({ string, date, removeFilter } : FilterItemProps) {
  return (
    <div className="filter-item">
      <button type="button" aria-label="remove filter" onClick={() => removeFilter(string)}><FaTimes /></button>
      <p>
        {string}
        :
      </p>
      <p>
        {formattedDate(date)}
      </p>
    </div>
  );
}

export default FilterItem;
