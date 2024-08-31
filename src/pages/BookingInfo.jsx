import React from 'react'
import BookingInput from '../components/BookingInput'
import { useNavigate } from "react-router-dom";

const BookingInfo = () => {
 
  const handleInputValue = () => {
    
  };

  //跳轉路由
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/miumiu-spa/orders");
  };

  return (
    <div className="m-5">
      <BookingInput
        onInputChange={handleInputValue}
        title="Name:"
        isRequired={true}
      />
      <BookingInput
        onInputChange={handleInputValue}
        title="Phone:"
        isRequired={true}
      />
      <BookingInput
        onInputChange={handleInputValue}
        title="Email:"
        isRequired={true}
      />
      <BookingInput
        onInputChange={handleInputValue}
        title="remark:"
        isRequired={false}
      />
      <button className="w-20 bg-white p-4 m-5" onClick={handleBack}>
        BACK
      </button>
    </div>
  );
}

export default BookingInfo