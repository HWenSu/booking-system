

const ServiceModal = ({ isOpen, onClose, title, info, imgURL, duration }) => {
  if (!isOpen) return null;

  return (
    <div className="  fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center backdrop-blur-sm z-40">
      <div className="relative bg-white w-[50rem] p-7 rounded-[30px] z-50 animate-fade-in-up opacity-80">
        <h2 className="text-[3rem] text-tertiary">{title}</h2>
        <p className="text-secondary text-[1.1rem]">{info}</p>
        <div className="flex items-center justify-around">
          <img
            src={imgURL}
            alt="{title}"
            className="w-[12rem] rounded-full mr-[3rem]"
          />
          <ul className="flex text-highLight ">
            {duration &&
              duration.map((min) => (
                <li key={min} className="p-3 bg-primary rounded-full m-6">
                  {min}{" "}
                  <button className=" text-white bg-secondary rounded-full p-4  m-2 hover:bounce2">
                    {" "}
                    Booking
                  </button>
                </li>
              ))}
          </ul>
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
