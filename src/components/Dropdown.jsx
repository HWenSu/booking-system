const Dropdown = ({ data, errors, register, setValue, watch }) => {
  const label = data[0].label;
  const isRequired = data[0].required;

  // 用 watch 監聽 selectedId 的變化
  const serviceId = watch("Service_id")
  const genderId = watch("Gender_id")

  // 處理選擇變更
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    console.log(data);

    let optionId = null;
    let selectedArr = []

    //尋找選中值的 option 資料
    //先判斷資料結構中的name是否為陣列
    if(!Array.isArray(data[0].option[0].name)){
      selectedArr = data[0].option.filter(
        (item) => item.name === selectedValue
      );
    } else {
      //資料結構中的name為陣列，則需往下拆解取出最後層的陣列
      const optionArr = data[0].option.filter(
        (option) => option.gender_id === Number(genderId)
      );
      selectedArr = optionArr[0].name.filter(
        (item) => item.name === selectedValue
      );
    }

    // 若id鍵存在
    if (selectedArr[0].id) {
      optionId = selectedArr[0].id;
    } // 若id鍵不存在
     else if (selectedArr[0].name[0].id) {
       optionId = selectedArr[0].name[0].id;
     }

    // 更新選中的 id
    if (optionId) {
      setValue(`${label}_id`, optionId);
    } else {
      //若沒選擇
      setValue(`${label}_id`, 0);
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
             } else if (label === "Staff" && option.gender_id === Number(genderId)) {
                   return option.name.map((item, arrIndex) => (
                  <option key={`${index}-${arrIndex}`} value={item.name}>
                    {item.name}
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
