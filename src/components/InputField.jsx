import React from 'react'

const InputField = ({ data}) => {
  return (
    <div className="">
      <div className="flex justify-center p-2">
        <p className="text-center px-5">{data[0].label}</p>
        <input type={data[0].type} />
      </div>
    </div>
  );
};

export default InputField