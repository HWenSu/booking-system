import { useState, useMemo, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMinutes, parseISO, format, isSameDay } from "date-fns";

const BookingTime = ({ errors, register, setValue, data, watch }) => {
  const [startDate, setStartDate] = useState(new Date());


  //監控duration的變化
  let selectedDuration = watch("Duration")
  console.log(watch("Duration"));

  //處理時間變化
  const handleChange = (date) => {
    setStartDate(date);
    // 計算結束時間
    const endDate = addMinutes(date, selectedDuration);
    //格式化時間
    const formattedDate = format(date, "yyyy-MM-dd HH:mm");
    const formattedEndDate = format(endDate, "yyyy-MM-dd HH:mm");
    //更新資料
    setValue("startTime", formattedDate);
    setValue("endTime", formattedEndDate);
  };

  //從 Watch 中取得 staff id 來計算該員工的可預約時間
  const staffId = watch("Staff_id");
  const staffName = watch("Staff");

  // 從後端獲取不可選擇的時間陣列
  const staffUnAvailableTime =
    data[0].unavailableDates[`staff_name:${staffName} ,staff_id:${staffId}`] ||
    [];

  // 將不可選的時間陣列轉換為 Date 對象
  const unavailableRanges = staffUnAvailableTime.map((time) => ({
    start: parseISO(time.start),
    end: parseISO(time.end),
  }));
  console.log("Unavailable Ranges:", unavailableRanges);
 

  // 根據選中日期選擇 react-datepicker 可接受的 excludeTimes 格式
    const getExcludeTimes = () => {
      if (!startDate) return [];

      return unavailableRanges.flatMap((range) => {
        const times = [];
        let currentTime = range.start;

        // 確定時間範圍是和日期相同的
        while (currentTime <= range.end) {
          if (isSameDay(currentTime, startDate)) {
            times.push(new Date(currentTime)); // 只添加選中日期的時間範圍
          }
          currentTime = addMinutes(currentTime, 30); // 每30分鐘生成一段時間
        }

        return times;
      });
    };

    // 使用 useMemo 避免不必要的重新計算
    const excludeTimes = useMemo(
      () => getExcludeTimes(),
      [startDate, unavailableRanges]
    );



  return (
    <div className=" ml-auto">
      <p className="pb-3">Booking Time</p>
      {selectedDuration ? (
        <>
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={selectedDuration}
            timeCaption="time"
            dateFormat=" yyyy/ MM/ dd, h:mm aa"
            inline
            excludeTimes={excludeTimes}
          />
          {/* 處理錯誤訊息 */}
          {errors.endTime && (
            <p className="booking-required">{errors.endTime.message}</p>
          )}

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
