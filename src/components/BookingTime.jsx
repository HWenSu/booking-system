import { useState, useMemo, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMinutes, isSameDay } from "date-fns";

const BookingTime = ({ errors, register, setValue, data, watch, duration }) => {
  const [startDate, setStartDate] = useState(new Date());

  //監控duration的變化

  useEffect(()=> {
    if(duration){
      handleChange(startDate)}
  }, [duration])

  //處理時間變化
  const handleChange = (date) => {
    // 確保選擇時間為 UTC 格式
    const utcDate = new Date(
      date.getTime()
    );
    setStartDate(utcDate);
    // 計算結束時間
    const endDate = addMinutes(utcDate, duration);
    //更新資料
    setValue("startTime", utcDate);
    setValue("endTime", endDate);
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
    start: time.start, //UTC時區的字串 
    end: time.end
  }));
  console.log("Unavailable Ranges:", unavailableRanges);
  console.log("staffUnAvailableTime", staffUnAvailableTime);

  // 根據選中日期選擇 react-date picker 可接受的 excludeTimes 格式
  const getExcludeTimes = () => {
    if (!startDate) return [];

    return unavailableRanges.flatMap((range) => {
      const times = [];
      let currentTime = new Date(range.start); 
      let currentUTCTime = new Date(currentTime.getTime() + currentTime.getTimezoneOffset()*60000);
      const rangeEndTime = new Date(range.end);
      const rangeEndUTCTime = new Date(
        rangeEndTime.getTime() + rangeEndTime.getTimezoneOffset() * 60000
      );

      while (currentUTCTime <= rangeEndUTCTime) {
        if (isSameDay(currentUTCTime, startDate)) {
          times.push(currentUTCTime);
        }
        currentUTCTime = addMinutes(currentUTCTime, 30); // 每次增加 30 分鐘
      }

      return times;
    });
  };


  // 使用 useMemo 避免不必要的重新計算
  const excludeTimes = useMemo(
    () => getExcludeTimes(),
    [startDate, unavailableRanges]
  );

  console.log("excludeTimes", excludeTimes);


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
            timeIntervals={30}
            timeCaption="Time"
            dateFormat=" yyyy-MM-dd HH:mm"
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
