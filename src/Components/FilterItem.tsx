import React from "react";

function FilterItem({ string, date }) {
  return (
    <thead className="filter-item">
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
