import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMinutes, format } from "date-fns";

const BookingTime = ({ duration, errors, register, setValue }) => {

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
    <div className=" ml-auto">
      <p className="pb-3">Booking Time</p>
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
            inline
            showDisabledMonthNavigation
          />
          {/* 處理錯誤訊息 */}
          {errors.endTime && <p className="booking-required">{errors.endTime.message}</p>}

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
