const BookingInput = ({ name, title, onInputChange, isRequired }) => {
  const handleInputChange = (e) => {
    const { value} = e.target
      onInputChange(name, value);
  };

  return (
    <div className="flex justify-center p-2">
      <p className="text-center px-5">{title}</p>
      <input
        name={name}
        onChange={handleInputChange}
        type="text"
        required={isRequired}
      />

    </div>
  );
};

export default BookingInput