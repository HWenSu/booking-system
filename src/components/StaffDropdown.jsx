const StaffDropdown = ( {data, errors, register} ) => {
  const label = data[0].label;
  const isRequired = data[0].required
  return (
    <div className="">
      <label>{label}</label>
      <select className="dropdown" name={label} {...register(label, {required: isRequired? `${label} is required`: false})}>
        <option value="">Choose {label}</option>
        {data[0] &&
          data[0].option.map((option, index) => (
            <option key={index} value={option.name}>
              {" "}
              {option.name}
            </option>
          ))}
      </select>
      {errors[label] && <p> {errors[label].message} </p>}
    </div>
  );
}

export default StaffDropdown