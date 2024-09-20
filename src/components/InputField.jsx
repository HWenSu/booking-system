import React from 'react'

const InputField = ( {data} ) => {
  return (
    <div className="flex justify-center p-2">
      <p className="text-center px-5">{data[0].label}</p>
      <input
        type="text"
      />
    </div>
  )
}

export default InputField