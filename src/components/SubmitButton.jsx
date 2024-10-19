import { useState } from 'react'
import SubmittedModal from './SubmittedModal';

const SubmitButton = ({formData, trigger}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  //設定為已提交
  const handleSubmit = async () => {
    //驗證表單是否正確填入
    const valid = await trigger();
    if (!valid) {
    console.log("Validation Errors:", errors)
    return; // 阻止送出
    } else {
      setIsSubmitted(true)
    }}
    
  console.log(formData)
  console.log(isSubmitted);

  return (
    <div>
      <button type='button' onClick={handleSubmit} className="submitBtn">
        Submit
      </button>
      {/* 點擊後彈出提視窗 */}
      {isSubmitted && <SubmittedModal formData={formData} />}
    </div>
  );
}

export default SubmitButton