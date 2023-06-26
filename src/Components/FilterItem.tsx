import React from "react";
import { FaTimes } from "react-icons/fa";

function FilterItem({ string, date, removeFilter}) {
  return (
    <thead className="filter-item">
      <button type="button" onClick={()=>removeFilter(string)}><FaTimes /></button>
      <p>
        {string}
        :
      </p>
      <p>
        {date}
      </p>
    </thead>
  );
}

export default FilterItem;
