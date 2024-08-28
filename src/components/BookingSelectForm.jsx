import { useState } from "react"

const BookingSelectForm = ({data, name} ) => {
  const [formData, setFormData] = useState({
    service: "",
    timeStamp: "",
    staff: "",
    name: "",
    gender: "",
    phone: "",
    email: "",
    remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <label htmlFor={name}>
        {name}
        <select
          name={name}
          id={name}
          value={formData[name]}
          onChange={handleChange}
        >
          <option value="">Choose one service</option>
          {data.map((item, i) => (
            <option key={i} value={{item}.name}>
              {item.name.toUpperCase()}
            </option>
          ))}
        </select>
      </label>
    </div>)
};

export default BookingSelectForm;