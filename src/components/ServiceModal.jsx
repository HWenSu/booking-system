// duration上限為4個
const ServiceModal = ({ isOpen, onClose, title, description, imgURL, duration, price }) => {
  if (!isOpen) return null;
  // 檢查duration數量(透過env檔拿變數看是否在開發期 再檢查duration數量)
  return (
    <div className="  fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center backdrop-blur-sm z-40">
      <div className="relative bg-white w-[50rem] p-7 rounded-[30px] z-50 animate-fade-in-up opacity-80">
        <h2 className="text-[3rem] text-tertiary">{title}</h2>
        <p className="text-secondary text-[1.1rem]">{description}</p>
        <div className="flex items-center justify-around">
          <img
            src={imgURL}
            alt="{title}"
            className="w-[12rem] rounded-full mr-[3rem]"
          />
          
          <ul className="grid grid-cols-2 gap-2 text-secondary">
    
            {duration &&
              duration.map((min) => (
                <li key={min} className="flex p-3 bg-primary rounded-full m-5 justify-between items-center">
                  <div className="flex items-center m-1">
                  <p className="text-[2rem] m-1">{min}</p>
                  <p>mins</p>
                  </div>
                  <button className="text-white bg-secondary rounded-full p-3 hover:bounce2">
                   $ {price}
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
