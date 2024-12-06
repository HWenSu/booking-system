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
          message: `只能填入中文或英文`,
        };
        rules.minLength = {
          value: 2,
          message: `至少兩個字元以上`,
        };
      break
      //驗證電話
      case 'Phone':
        rules.pattern = {
          //台灣手機號碼
          value: /^09\d{8}$/,
          message: `請輸入正確的電話號碼`,
        };
      break

      case 'Email':
        rules.pattern = {
          // 基本電子郵件格式
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: `請輸入正確的信箱`,
        };
        break
    }
    return rules    
  }


  return (
    <div className="grid">
      <div className="grid grid-cols-4">
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