import { useEffect, useState }from "react";
import { useForm } from "react-hook-form";


import BookingTime from "../components/BookingTime";
import ChangePage from "../components/ChangePage";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";

import useAPIService from "../components/hooks/useAPIService"; //獲取API的通用 HOOK
import SubmitButton from "../components/SubmitButton";

// 定義组件
const componentMap = {
  TimePicker: BookingTime,
  ChangePage: ChangePage,
  Input: InputField,
  Dropdown: Dropdown,
};

const Booking = () => {
  // 獲取模板資料
  const { data: templateData, error: templateError } = useAPIService(
    "http://localhost:5000/miumiu-spa/template"
  );

  const { data: orderData, error: orderError } = useAPIService(
    "http://localhost:5000/miumiu-spa/order"
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
  const handleClick =  async (type) => {
    if (type === "Next") {
      //驗證表單是否正確填入
      const valid = await trigger();
      if (!valid) {
      console.log("Validation Errors:", errors)
      return; // 阻止送出
    }
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
  console.log(watch()) } 

  return (
    <form
      className={"flex-col p-8 min-h-[100vh]  justify-center m-3 "}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-semibold text-[3rem] animate-fade-in-title m-10 mb-5 text-highlight">
        Booking
      </h2>
      <div className=" form-container">
        {/* //渲染模板 */}
        {slicedDataArr[currentPage - 1].map((item, index) => {
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
                watch={watch}
                selectedStaffId={watch()}
              />
            );
          }
        })}
        {console.log(watch())}
        {currentPage === slicedDataArr.length && (
          <SubmitButton formData={watch()} trigger={trigger} />
        )}
      </div>
    </form>
  );
}

export default Booking;
