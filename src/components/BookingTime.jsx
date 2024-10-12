import { useState } from "react";
import DatePicker from "react-datepicker";
// import Calendar from 'react-calendar'
// import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
// import "react-calendar/dist/Calendar.css";
// import "react-time-picker/dist/TimePicker.css";
import { addMinutes, format } from "date-fns";

const BookingTime = ({ duration, errors, register, setValue }) => {
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedTime, setSelectedTime] = useState(null)

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  //   console.log(date)
  // };

  // const handleTimeChange = (time) =>{
  //   setSelectedTime(time)
  //   console.log(time)
  // }

  // return (
  //   <div>
  //     <h3>Booking Time</h3>
  //     <Calendar onChange={handleDateChange} value={selectedDate} locale="zh-TW" />
  //     {/* 選擇該日的時間 */}
  //     {selectedDate && (
  //       <div>
  //         <h4>Pick Time</h4>
  //         <TimePicker
  //           onChange={handleTimeChange}
  //           value={selectedTime}
  //         // disableClock={true}
  //         />
  //       </div>
  //     )}
  //   </div>
  // );

  const [startDate, setStartDate] = useState(new Date());

  //處理時間變化
  const handleChange = (date) => {
    setStartDate(date);
    // 計算結束時間
    const endDate = addMinutes(date, duration);
    //格式化時間
    const formattedDate = format(date, "yyyy-MM-dd HH:mm");
    const formattedEndDate = format(endDate, "yyyy-MM-dd HH:mm");
    //更新資料
    setValue('startTime', formattedDate)
    setValue('endTime', formattedEndDate)
  }

  return (
    <div className="">
      <p>Booking Time</p>
      {duration ? (
        <>
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={duration}
            timeCaption="time"
            dateFormat=" yyyy/ MM/ dd, h:mm aa"
            className="m-2 text-highlight"
            inline
            showDisabledMonthNavigation
          />
          {/* 處理錯誤訊息 */}
          {errors.endTime && <p>{errors.endTime.message}</p>}

          {/* 註冊 startTime , endTime 字串 */}
          <input type="hidden" {...register("startTime")} />
          <input
            type="hidden"
            {...register("endTime", {
              required: "Date is required",
            })}
          />
        </>
      ) : (
        <p> Please choose service and duration first</p>
      )}
    </div>
  );
};


export default BookingTime;
