import { useState, useEffect } from "react";

import ServiceDropdown from "../components/ServiceDropdown";
import GenderDropdown from "../components/GenderDropdown";
import StaffDropdown from "../components/StaffDropdown";
import TimePicker from "../components/TimePicker";
import ChangePage from "../components/ChangePage";
import InputField from "../components/InputField";


import useAPIService from "../components/hooks/useAPIService"; //獲取API的通用 HOOK

// 定義组件
const componentMap = {
  ServiceDropdown: ServiceDropdown,
  GenderDropdown: GenderDropdown,
  StaffDropdown: StaffDropdown,
  TimePicker: TimePicker,
  ChangePage: ChangePage,
  Input: InputField,
};

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
  const [isHidden, setIsHidden] = useState(false);

  // 取得後端資料
  const { data: serviceData, error: serviceError } = useAPIService(
    "/modals/serviceData.json"
  );
  const { data: staffData, error: staffError } = useAPIService(
    "/modals/staffData.json"
  );

  const { data: templateData, error: templateError } = useAPIService(
    "/modals/templateData.json"
  );

  // useEffect(() => {
  //   //監聽 formData.gender 來過濾 Staff 名單
  //   if (staffData && staffData.staff) {
  //     const filteredStaff = formData.gender
  //       ? staffData.staff.filter((staff) => staff.gender === formData.gender)
  //       : staffData.staff;
  //     setFilteredStaff(filteredStaff);
  //   } else {
  //     setFilteredStaff([]); // 如果 staff　不在，設置為空陣列，防止錯誤
  //   }
  //   //監聽formData.service 來過濾 duration 名單
  //   if (serviceData && serviceData.services) {
  //     const filterService = formData.service
  //       ? serviceData.services.filter(
  //           (service) => service.name === formData.service
  //         )
  //       : serviceData.services;
  //     setFilterServices(filterService);
  //   } else {
  //     setFilterServices([]);
  //   }
  // }, [staffData, formData.gender, serviceData, formData.service]);

  //檢查API資料是否獲取成功
  if (!serviceData || !staffData) return <div>Loading</div>;
  if (serviceError) return <div>Error: {serviceError.message}</div>;
  if (staffError) return <div>Error: {staffError.message}</div>;

  //處理表單變化
  const handleChange = (name, value) => {
    setFormData((preFormData) => ({
      ...preFormData,
      [name]: value,
    }));
  };

  //處理時間戳改變函式
  const handleTimeChange = (date, endDate) => {
    setFormData((preFormData) => ({
      ...preFormData,
      startTime: date,
      endTime: endDate,
    }));
  };

  //處理表單提交
  const handleSubmit = (e) => {
    e.preventDefault(); //防止頁面重新整理

    console.log("Form submitted successfully:", formData);

    //清空表單資料
    setFormData({
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
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-4">
      <h2>Booking</h2>
      <div className={isHidden ? "hidden" : "block"}>
        {/* //渲染模板 */}
        {templateData.map((item, index) => {
          const Component = componentMap[item.category]
          {
            console.log(item.Data);
          }
          return (
            <Component
              key={index}
              data={item.Data}
              // onChange={onChange}
            />
          )
        })}
      </div>
    </form>
  );
};

export default Booking;
