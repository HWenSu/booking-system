
import BookingInput from "../components/BookingInput";

const BookingInfo = () => {

  const handleInputValue = () => {};

  return (
    <div>
      <BookingInput
        onInputChange={handleInputValue}
        title="Name:"
        isRequired={true}
      />
      <BookingInput
        onInputChange={handleInputValue}
        title="Phone:"
        isRequired={true}
      />
      <BookingInput
        onInputChange={handleInputValue}
        title="Email:"
        isRequired={true}
      />
      <BookingInput
        onInputChange={handleInputValue}
        title="Remark:"
        isRequired={false}
      />
    </div>
  );
};

export default BookingInfo;
