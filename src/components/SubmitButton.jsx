import { useState } from 'react'
import SubmittedModal from './SubmittedModal';

const SubmitButton = (formData) => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => (
    setIsSubmitted(true)
  )

  console.log(isSubmitted)

  return (
    <div>
      <button onClick={handleSubmit} className="submitBtn">
        Submit
      </button>
      {/* 點擊後彈出提視窗 */}
      {isSubmitted && <SubmittedModal formData={formData} />}
    </div>
  );
}

export default SubmitButton