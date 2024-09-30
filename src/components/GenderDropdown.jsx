import React from 'react'

const GenderDropdown = ({ data, isHidden, onChange }) => {
  return (
    <div className="">
      <label>{data[0].label}</label>
      <select
        className="dropdown"
        name={data[0].label}
        onChange={(e) => onChange(data[0].label, e.target.value)}
      >
        <option value="">Choose {data[0].label}</option>
        {data[0] &&
          data[0].option.map((option, index) => (
            <option key={index} value={option.name}>
              {" "}
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default GenderDropdown