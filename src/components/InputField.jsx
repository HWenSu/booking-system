import React from 'react'

const InputField = ({ data, onChange}) => {
  return (
    <div className="">
      <div className="flex justify-center p-2 ">
        <p className="text-center px-5">{data[0].label}</p>
        <input type={data[0].type} onChange={(e) => onChange(data[0].label, e.target.value)} className="input"
        required />
      </div>
    </div>
  );
};

export default InputField