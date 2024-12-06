// 從env取得duration上限數量
// const maxDuration = parseInt(import.meta.env.VITE_MAX_DURATION_LENGTH, 10)

import { Link } from "react-router-dom";

const ServiceModal = ({ isOpen, onClose, title, description, imgURL, selectedMassage_id, data }) => {
  if (!isOpen) return null;
  // 檢查duration數量
  // if(duration.length > maxDuration){
  //   return console.log(`duration cannot more than ${maxDuration} `)
  // }
  console.log(selectedMassage_id);
  console.log(data)
  
  return (
    <div className="modalBg">
      <div className="modalPanel">
        <h2 className="text-[3rem]">{title}</h2>
        <p className="p-2">{description}</p>
        <div className="flex items-center justify-around">
          <img
            src={imgURL}
            alt={title}
            className="w-[12rem] rounded-full mr-[3rem]"
          />
          <ul className="grid grid-cols-2 gap-2 text-primary">
            {
              data &&
              data.map((item) => {
                if(selectedMassage_id === item.massage_id ) {
                  return (
                    <li
                      key={item.duration}
                      className="flex p-3 bg-tertiary rounded-full m-5 justify-between items-center"
                    >
                      <div className="flex items-center m-1">
                        <p className="text-[2rem] m-1">{item.duration}</p>
                        <p>mins</p>
                      </div>
                      <button className="text-white bg-highlight rounded-full p-3 hover:bounce2">
                        <Link to='/miumiu-spa/orders'>$ {item.price}</Link>
                      </button>
                    </li>
                  );
                }
              })
            }

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
