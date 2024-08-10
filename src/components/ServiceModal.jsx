

const ServiceModal = ({ isOpen, onClose, title, info, imgURL, duration }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center backdrop-blur-md z-40">
      <div className="relative bg-white w-[50rem] opacity-80 p-7 rounded-[30px] z-50">
        <h2 className="text-[3rem] text-tertiary">{title}</h2>
        <p className="text-secondary text-[1.1rem]">{info}</p>
        <div className="flex items-center">
          <img
            src={imgURL}
            alt="{title}"
            className="w-[12rem] rounded-full mr-[3rem]"
          />
          <ul className="flex text-white ">
            {duration &&
              duration.map((min) => (
                <li key={min} className="p-2 bg-highLight rounded-full m-2">
                  {min}{" "}
                </li>
              ))}
          </ul>
          <button className="p-5 bg-primary text-highLight rounded-full m-2 ">
            {" "}
            Booking Now !
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 bg-secondary w-[3rem] h-[3rem] text-white rounded-full text-[1.5rem] text-center"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;
