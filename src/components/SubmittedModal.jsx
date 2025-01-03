import React from 'react'
import { Link } from 'react-router-dom';

const SubmittedModal = ({ formData }) => {
  console.log(formData)
  return (
    <div className="modalBg">
      <div className="modalPanel">
        <h3>預約成功</h3>
        <p>
          {formData.Name} 感謝您預約 {formData.Service}
        </p>
        <p>
          預約時段: {formData.startTime}{" "}-{" "}
          {formData.endTime}
        </p>
        <p>預約資訊將會寄送至您的信箱，如有問題請與我們聯繫</p>
        <button>
          <Link to="/"> 返回首頁 </Link>
        </button>
      </div>
    </div>
  );
};

export default SubmittedModal