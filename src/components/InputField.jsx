import {useEffect} from 'react'

const InputField = ({ data, errors, register, setValue }) => {
  const label = data[0].label;
  const isRequired = data[0].required
  // 每次 InputField 被載入時，清空該欄位的值
  useEffect(()=> {
    setValue(`${label}`, '')
  }, [label, setValue])

  return (
    <div className="">
      <div className="flex justify-center p-2 ">
        <p className="text-center px-5">{label}</p>
        <input
          type={data[0].type}
          className="input"
          autoComplete="off"
          {...register(label, {
            required: isRequired ? `${label} is required` : false,
          })}
        />
        {errors[label] && <p>{errors[label].message}</p>}
      </div>
    </div>
  );
};

export default InputField