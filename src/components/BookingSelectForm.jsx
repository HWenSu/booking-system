

const BookingSelectForm = ({ data, name, getValue ,onChange}) => {
  
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(name, value); // 將事件回調給父層
  };

  return (
    <select name={name} id={name} onChange={handleChange}>
      <option value="">Choose {name} </option>
      {data.map((item, index) => {
        {
          console.log(item);
        }
        return (
          <option key={index} value={item[getValue]}>
            {item[getValue]}
          </option>
        );
      })}
    </select>
  );
};

export default BookingSelectForm;