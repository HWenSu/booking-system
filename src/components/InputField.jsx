import {useEffect} from 'react'

const InputField = ({ data, errors, register, setValue }) => {
  const label = data[0].label;
  const type = data[0].type
  const isRequired = data[0].required

  // 每次 InputField 被載入時，清空該欄位的值
  useEffect(()=> {
    setValue(`${label}`, '')
  }, [label, setValue])

  //動態規則 函式
  const getRules = () => {
    const rules = {}
    if(isRequired) {
      rules.required = `${label} is required`
    }

    //根據規則增加規則pattern
    switch (label){
      //驗證姓名
      case 'Name':
        rules.pattern = {
          value: /^[\u4e00-\u9fa5a-zA-Z\s]+$/, // 中文、英文、空格
          message: `Only Chinese or English can be entered.`,
        };
        rules.minLength = {
          value: 2,
          message: `At least two characters are required.`,
        };
      break
      //驗證電話
      case 'Phone':
        rules.pattern = {
          //台灣手機號碼
          value: /^09\d{8}$/,
          message: `Please enter a valid phone number`,
        };
      break

      case 'Email':
        rules.pattern = {
          // 基本電子郵件格式
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: `Please enter a valid email address`,
        };
        break
    }
    return rules    
  }


  return (
    <div className="m-2">
      <div className="input-textarea">
        <p className="text-center px-5">{label}</p>
        <input
          // type={data[0].type}
          className="input"
          autoComplete="off"
          {...register(
            label,
            getRules()
            //傳入動態規則
          )}
        />
      </div>
      {errors[label] && (
        <p className="booking-required text-sm">{errors[label].message}</p>
      )}
    </div>
  );
};

export default InputField