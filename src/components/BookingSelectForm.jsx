import { useState } from "react"

const BookingSelectForm = ({data, name, value} ) => {
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
      <select name={name} id={name}>
        <option value="">Choose {name} </option>
        { data.map((item, index) => {
           {
             console.log(item);
           }
           return <option key={index} value={item[value]}>
            {item[value]}
           </option>;
          })
        }
      </select>
  );
};

export default BookingSelectForm;