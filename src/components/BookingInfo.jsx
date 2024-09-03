import BookingInput from "../components/BookingInput";

const BookingInfo = ({ handleChange }) => {
  const handleInputValue = (name, value) => {
    handleChange(name, value);
  };

  return (
    <div>
      <BookingInput
        onInputChange={handleInputValue}
        title="Name:"
        name="name"
        isRequired={true}
      />
      <BookingInput
        onInputChange={handleInputValue}
        title="Phone:"
        name="phone"
        isRequired={true}
      />
      <BookingInput
        onInputChange={handleInputValue}
        title="Email:"
        name="email"
        isRequired={true}
      />
      <BookingInput
        onInputChange={handleInputValue}
        title="Remark:"
        name="remark"
        isRequired={false}
      />
    </div>
  );
};

export default BookingInfo;
