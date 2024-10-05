import React from 'react'

const InputField = ({ data, errors, register }) => {
  const label = data[0].label;
  const isRequired = data[0].required
  return (
    <div className="">
      <div className="flex justify-center p-2 ">
        <p className="text-center px-5">{label}</p>
        <input
          type={data[0].type}
          className="input"
          {...register(label, {
            required: isRequired? `${label} is required`: false,
          })}
        />
        {errors[label] && (
          <p>{errors[label].message}</p>
        )}
      </div>
    </div>
  );
};

export default InputField