import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import DateFilterForm from "./DateFilterForm";

function Filter() {
  const [visible, setVisible] = useState(false);

  const toggleFilterForm = () => {
    setVisible(!visible);
  };
  return (
    <div className="filter">
      <button type="button" onClick={toggleFilterForm}>
        <FaFilter />
      </button>
      {visible ? <DateFilterForm toggleFilterForm={toggleFilterForm} /> : null}
    </div>
  );
}

export default Filter;
