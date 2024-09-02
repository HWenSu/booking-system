import { useState, useEffect } from "react";
import BookingTimeStamp from "../components/BookingTimeStamp";
import BookingInfo from "../components/BookingInfo";
import BookingDropdown from "../components/BookingDropdown";
import useAPIService from "../components/hooks/useAPIService"; //獲取API的通用 HOOK

const Booking = () => {
  //儲存表單資料
  const [formData, setFormData] = useState({
    service: "",
    startTime: "",
    endTime: "",
    staff: "",
    name: "",
    gender: "",
    phone: "",
    email: "",
    remark: "",
  });


  //儲存過濾清單
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [filterServices, setFilterServices] = useState([]);
  //儲存隱藏變數
  const [isHidden, setIsHidden] = useState(false)

  //處理表單變化
  const handleChange = (name, value) => {
    setFormData((preFormData) => ({
      ...preFormData,
      [name]: value,
    }));
  };

  // 取得後端資料
  const { data: serviceData, error: serviceError } = useAPIService(
    "/modals/serviceData.json"
  );
  const { data: staffData, error: staffError } = useAPIService(
    "/modals/staffData.json"
  );

  useEffect(() => {
    //監聽 formData.gender 來過濾 Staff 名單
    if (staffData && staffData.staff) {
      const filteredStaff = formData.gender
        ? staffData.staff.filter((staff) => staff.gender === formData.gender)
        : staffData.staff;
      setFilteredStaff(filteredStaff);
    } else {
      setFilteredStaff([]); // 如果 staff　不在，設置為空陣列，防止錯誤
    }
    //監聽formData.service 來過濾 duration 名單
    if (serviceData && serviceData.services) {
      const filterService = formData.service
        ? serviceData.services.filter(
            (service) => service.name === formData.service
          )
        : serviceData.services;
      setFilterServices(filterService);
    } else {
      setFilterServices([]);
    }
  }, [staffData, formData.gender, serviceData, formData.service]);

  //檢查API資料是否獲取成功
  if (!serviceData || !staffData) return <div>Loading</div>;
  if (serviceError) return <div>Error: {serviceError.message}</div>;
  if (staffError) return <div>Error: {staffError.message}</div>;

  const handleTimeChange = (date, endDate) => {
    setFormData((preFormData) => ({
      ...preFormData,
      startTime: date,
      endTime: endDate,
    }));
  };

  //處理下一步按鈕的函式
  const handleNext = () => {
    setIsHidden(true)
  }
  //處理上一步按鈕的函式
  const handleBack = () => {
    setIsHidden(false)
  }

  return (
    <form className="flex flex-col m-4">
      <h2>BOOKING</h2>
      <div className={isHidden ? "hidden" : "block"}>
        <BookingDropdown
          serviceData={serviceData.services}
          filterService={filterServices}
          staffData={staffData.staff}
          filteredStaff={filteredStaff}
          onChange={handleChange}
        />
        <BookingTimeStamp
          duration={formData.duration}
          onTimeChange={handleTimeChange}
        />
        <button onClick={handleNext}>Next</button>
      </div>

      <div className={isHidden ? "block" : "hidden"}>
        <BookingInfo />
        <button onClick={handleBack}>Back</button>
      </div>
    </form>
  );
}

export default Booking