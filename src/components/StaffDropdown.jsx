const StaffDropdown = ( {data, isHidden} ) => {
  {console.log(data)}
  return (
    <div className={isHidden ? "hidden" : "block"}>
      <label>{data[0].label}</label>
      <select className="m-2">
        <option value="">Choose {data[0].label}</option>
        {data[0] &&
          data[0].option.map((option, index) => (
            <option key={index}> {option.name}</option>
          ))}
      </select>
    </div>
  );
}

export default StaffDropdown