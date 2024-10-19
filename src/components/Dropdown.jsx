const Dropdown = ({ data, errors, register, setValue, watch }) => {
  const label = data[0].label;
  const isRequired = data[0].required;

  // 用 watch 監聽 selectedId 的變化
  const serviceId = watch("Service_id")
  const genderId = watch("Gender_id")

  console.log(serviceId);
  // 處理選擇變更
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    //尋找選中值的 option 資料
    const optionIndex = data[0].option.findIndex(
       (option) =>{ 
        if(!Array.isArray(option.name)){
          return  option.name === selectedValue
        }}
     );
     // 更新選中的 id
     if(optionIndex !== -1) {
      const selectedOptionId = data[0].option[optionIndex].id;
      setValue(`${label}_id`, selectedOptionId);      
     } else {
      //若沒選擇
      setValue(`${label}_id`, null);
     }
   };

  return (
    <div className="">
      <label>{label}</label>
      <select
        className="dropdown"
        name={label}
        {...register(label, {
          required: isRequired ? `${label} is required` : false,
          onChange: handleSelectChange,
        })}
      >
        <option value="">Choose {data[0].label}</option>
        {data[0] &&
          data[0].option.map((option, index) => {
            if( !Array.isArray(option.name) ) {
              return ( <option key={index} value={option.name}>
                {option.name}
              </option> )
            } else if 
             (label === 'Duration' && option.id === Number(serviceId)) {
               return option.name.map((item, arrIndex) => (
                 <option key={`${index}-${arrIndex}`} value={item}>
                   {item}
                 </option>
               ))
             } else if (label === "Staff" && option.id === Number(genderId)) {
                   return option.name.map((item, arrIndex) => (
                  <option key={`${index}-${arrIndex}`} value={item}>
                    {item}
                  </option>
                ))
              } else {
                return []
              }
            })}
      </select>
      {errors[label] && <p className="booking-required">{errors[label].message}</p>}
    </div>
  );
};

export default Dropdown
