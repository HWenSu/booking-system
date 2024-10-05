


const GenderDropdown = ({ data, errors, register }) => {
  const label = data[0].label
  const isRequired = data[0].required
  return (
    <div className="">
      <label>{label}</label>
      <select
        className="dropdown"
        name={label}
        {...register(label, {
          required: isRequired ? `${label} is required` : false,
        })}
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
      {errors[label] && (
        <p className="">{errors[label].message}</p>
      )}
    </div>
  );
};

export default GenderDropdown