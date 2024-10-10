import { useEffect, useState }from "react";
import { useForm } from "react-hook-form";

import ServiceDropdown from "../components/ServiceDropdown";
import GenderDropdown from "../components/GenderDropdown";
import StaffDropdown from "../components/StaffDropdown";
import TimePicker from "../components/TimePicker";
import ChangePage from "../components/ChangePage";
import InputField from "../components/InputField";

import useAPIService from "../components/hooks/useAPIService"; //獲取API的通用 HOOK
import SubmitButton from "../components/SubmitButton";

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
  // 獲取模板資料
  const { data: templateData, error: templateError } = useAPIService(
    "/modals/templateData.json"
  );


  // 用 React Hook Form 管理表單
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  // 儲存頁面狀態
  const [currentPage, setCurrentPage] = useState(1);

    if (!templateData) return <div>Loading</div>;
    if (templateError) return <div>Error: {templateError.message}</div>;


  // 尋找 ChangePage 的 index (回傳為數組陣列)
  const changePageIndexes = templateData.reduce((acc, item, index) => {
    if (item.category === "ChangePage") {
      acc.push(index);
    }
    return acc;
  }, []);

  // 透過 changeIndex 來切割 templateData 的資料
  const slicedDataArr = [];
  if (changePageIndexes.length > 0) {
    let startIndex = 0;
    const slicedData = changePageIndexes.map((index) => {
      const slice = templateData.slice(startIndex, index + 1);
      startIndex = index + 1;
      return slice;
    });
    slicedData.map((data) => slicedDataArr.push(data));
  }

  // 處理跳頁變化
  const handleClick = async (type) => {
    //驗證表單是否正確填入
    const valid = await trigger();
    if (!valid) {
      console.log("Validation Errors:", errors)
      return; // 阻止換頁
    }

    if (type === "Next") {
       console.log(watch());
      setCurrentPage(currentPage + 1);
    } else {
       console.log(watch());
      setCurrentPage(currentPage - 1);
    }
  };

  //處理表單提交
  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    console.log(watch());
    reset(); //重置表單
  };

  return (
    <form className={"flex-col p-8"} onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-semibold text-[3rem] animate-fade-in-title mb-5 text-highlight">
        Booking
      </h2>
      <div className="text-lg">
        {/* //渲染模板 */}
        {slicedDataArr[currentPage - 1].map((item, index) => {
          console.log(item);
          const Component = componentMap[item.category];
          if (Component) {
            return (
              <Component
                key={index}
                data={item.Data}
                // onChange={handleChange}
                register={register} // 將React Hook Form 的 register 傳給子组件
                // onTimeChange={handleTimeChange}
                errors={errors} // 傳遞驗證錯誤
                onClick={handleClick}
                setValue={setValue}
                duration={watch("Duration")}
                currentPage={currentPage}
                pagesLength={slicedDataArr.length}
                prefix={`page${currentPage}`}
              />
            );
          }
        })}
      </div>
      {currentPage === slicedDataArr.length && (
        <SubmitButton formData={watch()} />
      )}
    </form>
  );
}

export default Booking;
