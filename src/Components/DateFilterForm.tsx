import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { DateFilterFormProps } from "../Utils/types";
import { dateFilter } from "../Utils/dateFilter";
import { data } from "../Utils/data";

function DateFilterForm({
  toggleFilterForm,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setFilterDates,
  setCampaigns,
}: DateFilterFormProps) {
  const handleSave = async (starting: Date, ending: Date) => {
    setFilterDates({ startDate: starting, endDate: ending });
    const result = await dateFilter(data, endDate, startDate);
    setCampaigns(result);
  };
  return (
    <motion.div
      className="dateFilterForm"
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      exit={{ x: "-50%" }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <button type="button" onClick={toggleFilterForm}>
        <FaTimes />
      </button>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSave(startDate, endDate);
        toggleFilterForm();
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
    </motion.div>
  );
}

export default DateFilterForm;
