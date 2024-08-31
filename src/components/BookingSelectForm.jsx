
const BookingSelectForm = ({ data, name, getValue ,onChange}) => {
  
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(name, value); // 將事件回調給父層
  };

  return (
    <select name={name} id={name} onChange={handleChange}>
      {console.log(data)}
      <option disabled value="">
        Choose {name}{" "}
      </option>
      {Array.isArray(data[0][getValue]) && name === "duration"
        ? data.map((item, i) =>
            item[getValue].map((subItem, j) => (
              <option key={`${i}-${j}`} value={subItem}>
                {subItem}
              </option>
            ))
          )
        : data.map((item, index) => (
            <option key={index} value={item[getValue]}>
              {item[getValue]}
            </option>
          ))}
    </select>
  );
}

export default BookingSelectForm;