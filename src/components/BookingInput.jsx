import React, { useState } from 'react'

const BookingInput = ({ title, onInputChange, isRequired }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (onInputChange) {
      onInputChange(e.target.value);
    }
  };

  return (
    <div className="flex justify-center p-2">
      <p className="text-center px-5">{title}</p>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        required={isRequired}
      />

    </div>
  );
};

export default BookingInput