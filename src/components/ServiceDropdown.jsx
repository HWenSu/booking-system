import { useState } from "react"

const ServiceDropdown = ({ data, onChange }) => {
  const [selectedService, setSelectedService] = useState([])
  const [filteredDuration, setFilteredDuration] = useState([])

  //取得service, duration資料
  const serviceData = data.filter(item => item.label === 'Service')
  const durationData = data.filter(item => item.label === 'Duration')

  //處理service選單變化
  const handleServiceChange = (e) => {
    //儲存被選擇 service 的值
    const selectedValue = e.target.value;
    setSelectedService(selectedValue);

    // 用 findIndex 找出 service 的 index 值
    const serviceIndex = serviceData[0].option.findIndex(
      (service) => service === parseInt(selectedValue)
    );

    // 使用 serviceIndex 找出對應的 duration
    if (serviceIndex !== -1) {
      setFilteredDuration(durationData[0].option[serviceIndex]);
    } else {
      setFilteredDuration([]);
    }
    //透過 onChange 回調 name, value 回父組件(Booking.jsx)
    onChange(serviceData[0].label, selectedValue)
  }

  //處理 duration 選單變化
  const handleDurationChange = (e) => {
    const selectedDuration = e.target.value;
    //透過 onChange 回調 name, value 回父組件(Booking.jsx)
    onChange(durationData[0].label, selectedDuration);
  }

  return (
    <div>
      {/* Service下拉選單 */}
      <label>
        {serviceData[0].label}
        <select
          name={serviceData[0].label}
          onChange={handleServiceChange}
        >
          <option value="" >Choose {serviceData[0].label}</option>
          {serviceData[0].option.map((service, index) => (
            <option key={index} value={service} >
              {service}
            </option>
          ))}
        </select>
      </label>

      {/* Duration下拉選單 */}
      <label>
        {durationData[0].label}
        <select name={durationData.label} onChange={handleDurationChange}>
          <option value="">Choose {durationData[0].label}</option>
          //渲染出 service 對應的duration
          {filteredDuration.map((duration, index) => (
            <option key={index} value={duration}>{duration}</option>
          ))}
        </select>
      </label>
    </div>
  );

}

export default ServiceDropdown;
