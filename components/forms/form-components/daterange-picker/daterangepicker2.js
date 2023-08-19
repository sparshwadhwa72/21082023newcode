import React, { useState } from "react";

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';

const DateRangePicker = () => {
  const defaultFrom = {
    year: 2023,
    month: 3,
    day: 9,
  };
  const defaultTo = {
    year: 2023,
    month: 3,
    day: 12,
  };
  const defaultValue = {
    from: defaultFrom,
    to: defaultTo,
  };
  const [selectedDayRange, setSelectedDayRange] = useState(
    defaultValue
  );

  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      colorPrimary="#216194" // added this
      colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this
      
    />
  );
};

export default DateRangePicker;