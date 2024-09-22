import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMinutes, format } from "date-fns";

const TimePicker = ({ duration, onTimeChange, isHidden }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
    const endDate = addMinutes(date, duration);
    const formattedDate = format(date, "yyyy-MM-dd HH:mm");
    const formattedEndDate = format(endDate, "yyyy-MM-dd HH:mm");
    onTimeChange(formattedDate, formattedEndDate)
  }
  return (
    <div>
      <p>Booking Time</p>
      { duration?(
      <div className={isHidden ? "hidden" : "block"}>
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={duration}
          timeCaption="time"
          dateFormat=" yyyy/ MM/ dd, h:mm aa"
          className="m-2"
        />
      </div>
      ) : (<p> Please choose service and duration first</p>) }
    </div>
  );
};


export default TimePicker;
