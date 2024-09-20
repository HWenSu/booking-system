import { useState }from "react";

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
    Service: "",
    Duration: "",
    Gender: "",
    Staff: "",
    startTime: "",
    endTime: "",
    name: "",
    phone: "",
    email: "",
    remark: "",
  });

  //儲存隱藏變數
  const [isHidden, setIsHidden] = useState(false);
  // 儲存切換頁的狀態
  const [changePageString, setChangePageString] = useState("Next");

  const { data: templateData, error: templateError } = useAPIService(
    "/modals/templateData.json"
  );

  if (!templateData) return <div>Loading</div>;
  if (templateError) return <div>Error: {templateError.message}</div>;

  // 隱藏切換函式
  const getHidden = (category) => {
    if (category !== "Input" && changePageString === "Back") {
      return true;
    } else if (category === "Input" && changePageString === "Next") {
      return true;
    } else {
      return false;
    }
  };

  //  處理切換頁函式
  const handleChangePage = () => {
    if (changePageString === "Next") {
      setChangePageString("Back");
      setIsHidden(true);
    } else {
      setChangePageString("Next");
      setIsHidden(false);
    }
  };

  // 處理表單變化
  const handleChange = (name, value) => {
    setFormData((preFormData) => ({
      ...preFormData,
      [name]: value,
    }));
  };

  //處理時間改變函式
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
    <form onSubmit={handleSubmit} className="flex flex-col m-8">
      <h2 className="text-tertiary font-semibold text-[3rem] animate-fade-in-title">
        Booking
      </h2>
      <div>
        {/* //渲染模板 */}
        {templateData.map((item, index) => {
          const Component = componentMap[item.category];
          return (
            <Component
              key={index}
              data={item.Data}
              isHidden={getHidden(item.category)}
              onChange={handleChange}
              onTimeChange={handleTimeChange}
              changePageString={changePageString}
              onChangePage={handleChangePage}
              duration={formData.Duration}
            />
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        className={changePageString === "Back" ? "block" : "hidden"}
      >
        Submit
      </button>
    </form>
  );
};

export default Booking;
