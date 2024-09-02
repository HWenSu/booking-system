import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { addMinutes } from "date-fns";

const BookingTimeStamp = ({ duration, onTimeChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    const endDate = addMinutes(date, duration)
    setStartDate(date)
    onTimeChange(date, endDate)
    console.log(date) 
    console.log( typeof date)
  }

  return (
    <div>
      
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={duration}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
    </div>

  );
};

export default BookingTimeStamp;
