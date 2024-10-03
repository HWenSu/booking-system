// 從env取得duration上限數量
// const maxDuration = parseInt(import.meta.env.VITE_MAX_DURATION_LENGTH, 10)

const ServiceModal = ({ isOpen, onClose, title, description, imgURL, duration, price }) => {
  if (!isOpen) return null;
  // 檢查duration數量
  // if(duration.length > maxDuration){
  //   return console.log(`duration cannot more than ${maxDuration} `)
  // }
  
  return (
    <div className="  fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center backdrop-blur-sm z-40">
      <div className="relative bg-white w-[50rem] p-7 rounded-[30px] z-50 animate-fade-in-up opacity-80">
        <h2 className="text-[3rem]">{title}</h2>
        <p className="p-2">{description}</p>
        <div className="flex items-center justify-around">
          <img
            src={imgURL}
            alt={title}
            className="w-[12rem] rounded-full mr-[3rem]"
          />

          <ul className="grid grid-cols-2 gap-2 text-primary">
            {console.log(duration)}
            {console.log(price)}
            {duration &&
              duration.map((min) => (
                <li
                  key={min}
                  className="flex p-3 bg-tertiary rounded-full m-5 justify-between items-center"
                >
                  <div className="flex items-center m-1">
                    <p className="text-[2rem] m-1">{min}</p>
                    <p>mins</p>
                  </div>
                  <button className="text-white bg-highlight rounded-full p-3 hover:bounce2">
                    $ {price}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 bg-tertiary  w-[3rem] h-[3rem] text-white rounded-full text-[1.5rem] text-center"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;
