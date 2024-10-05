import { useState } from 'react'
import SubmittedModal from './SubmittedModal';

const SubmitButton = ({formData}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  //設定為已提交
  const handleSubmit = () => setIsSubmitted(true);
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