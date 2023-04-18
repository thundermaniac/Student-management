import React from "react";
import DatePicker from "react-datepicker";

function MyDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
}

export default MyDatePicker;