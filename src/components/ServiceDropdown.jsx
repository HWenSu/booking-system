import { useState } from "react"

const ServiceDropdown = ({ data, errors, register }) => {
  const [selectedService, setSelectedService] = useState("");
  const [filteredDuration, setFilteredDuration] = useState([]);

  //取得service, duration資料
  const serviceData = data.filter((item) => item.label === "Service");
  const durationData = data.filter((item) => item.label === "Duration");

  //取得是否 required 資料
  const serviceRequired = serviceData[0].required;
  const durationRequired = durationData[0].required;

  //處理service選單變化
  const handleServiceChange = (e) => {
    //儲存被選擇 service 的值
    const selectedValue = e.target.value;
    setSelectedService(selectedValue);

    // 用 findIndex 找出 service 的 index 值
    const serviceIndex = serviceData[0].option.findIndex(
      (service) => service === selectedValue
    );

    // 使用 serviceIndex 找出對應的 duration
    if (serviceIndex !== -1) {
      setFilteredDuration(durationData[0].option[serviceIndex]);
    } else {
      setFilteredDuration([]);
    }
  };

  const serviceLabel = serviceData[0].label;
  const durationLabel = durationData[0].label;

  return (
    <div className="flex flex-col ">
      {/* Service下拉選單 */}
      <label>
        {serviceLabel}
        <select
          name={serviceLabel}
          className="dropdown"
          {...register(serviceLabel, {
            required: serviceRequired ? `${serviceLabel} is required` : false,
            onChange: handleServiceChange,
          })}
        >
          <option value="">Choose {serviceData[0].label}</option>
          {serviceData[0].option.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors[serviceLabel] && (
          <p className="">{errors[serviceLabel].message}</p>
        )}
      </label>

      {/* Duration下拉選單 */}
      <label>
        {durationLabel}
        <select
          name={durationData.label}
          className="dropdown"
          {...register(durationLabel, {
            required: durationRequired? `${durationLabel} is required`: false,
          })}
        >
          <option value="">Choose {durationLabel}</option>
          {/* 渲染出 service 對應的duration */}
          {filteredDuration.map((duration, index) => (
            <option key={index} value={duration}>
              {duration}
            </option>
          ))}
        </select>
      </label>
      {errors[durationLabel] && (
        <p className="">{errors[durationLabel].message}</p>
      )}
    </div>
  );
}

export default ServiceDropdown;
