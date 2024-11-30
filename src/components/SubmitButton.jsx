import { useState } from 'react'
import SubmittedModal from './SubmittedModal';
import axios from "axios"

//Post API URL
const postURL = 'http://localhost:5000/miumiu-spa/order'

const SubmitButton = ({formData, trigger}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitData = {
    serviceId: formData.Service_id,
    start: formData.startTime,
    end: formData.endTime,
    staff: formData.Staff_id,
    name: formData.Name,
    gender: formData.Gender_id,
    phone: formData.Phone,
    email: formData.Email,
    remark: formData.Remark,
  };

  //串接 post API 將預約資料傳回後端
  const postBookingData = async (data) => {
    try {
      const response = await fetch(postURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Booking Success", result);
      return result;
    } catch (error) {}
    console.log("Error submitting booking", error);
    throw error;
  };

  //按下提交表單時
  const handleSubmit = async () => {
    //驗證表單是否正確填入
    const valid = await trigger();

    const result = await postBookingData(submitData);
    console.log("API Response", result)
    

    if (!valid) {
      console.log("Validation Errors:", errors);
      return; // 阻止送出
    } else {
      setIsSubmitted(true);
    }
  };

  console.log(formData);
  console.log(isSubmitted);

  return (
    <div>
      <button type="button" onClick={handleSubmit} className="submitBtn">
        Submit
      </button>
      {/* 點擊後彈出提視窗 */}
      {isSubmitted && <SubmittedModal formData={formData} />}
    </div>
  );
}

export default SubmitButton