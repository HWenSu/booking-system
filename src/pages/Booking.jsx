import { useState }from "react";
import { useTheme } from "../context/ThemeContext";

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

  //獲取主題
  const { currentTheme } = useTheme();

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

  // 儲存頁面狀態
  const [ currentPage, setCurrentPage ] = useState(1)


 // 獲取模板資料
  const { data: templateData, error: templateError } = useAPIService(
    "/modals/templateData.json"
  );

  if (!templateData) return <div>Loading</div>;
  if (templateError) return <div>Error: {templateError.message}</div>;

  // 尋找 ChangePage 的 index (回傳為數組陣列)
  const changePageIndexes = templateData.reduce( (acc, item, index) => {
    if( item.category === "ChangePage")  {
      acc.push(index)
    }
   return acc
  }, [])

  // 透過 changeIndex 來切割 templateData 的資料
  const slicedDataArr = [];
  if ( changePageIndexes.length > 0 ) {
    let startIndex = 0;
      const slicedData =  changePageIndexes.map((index) => {
      const slice = templateData.slice(startIndex, index+1)
      startIndex = index + 1
      return slice
    }) 
    slicedData.map((data) => slicedDataArr.push(data));
  }

  // 處理跳頁變化
  const handleClick = (type) => {
    if (type === 'Next' ){
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  }

  console.log(currentPage);
  console.log(slicedDataArr.length)

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
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col m-8 theme-${currentTheme}`}>
      <h2 className="text-tertiary font-semibold text-[3rem] animate-fade-in-title">
        Booking
      </h2>
      <div>
        {/* //渲染模板 */}
        {slicedDataArr[currentPage - 1].map((item, index) => {
          const Component = componentMap[item.category]
          if(Component){
            return (
              <Component
                key={index}
                data={item.Data}
                onChange={handleChange}
                onTimeChange={handleTimeChange}
                onClick={handleClick}
                duration={formData.Duration}
                currentPage={currentPage}
                pagesLength={slicedDataArr.length}
              />
            );
          }
        })}
      </div>
      {currentPage === slicedDataArr.length&& (<button onClick={handleSubmit} className="">
        Submit
      </button> )}

    </form>
  );
}

export default Booking;
