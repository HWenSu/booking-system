import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import ServiceModal from "../components/ServiceModal";
import useAPIService from '../components/hooks/useAPIService';

const Service = () => {

  // 獲取 API 資料
  const { data, error } = useAPIService(
    'http://localhost:5000/service'
  );
  const [ modalOpenIndex, setModalOpenIndex ] = useState(null)

  const openModal = (index) => setModalOpenIndex(index);
  const closeModal = () => setModalOpenIndex(null);

  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>Loading...</div>; 
  return (
    <div className="my-8">
      <div className="my-10">
        <h2 className="text-tertiary font-semibold text-[3rem] animate-fade-in-title">
          OUR SERVICE
        </h2>
        <FontAwesomeIcon
          icon={faPagelines}
          style={{ color: "#b4a69c" }}
          size="2xl"
          className="my-8"
        />
        <p className="text-tertiary text-[1.5rem]">
          Please check below for our services
        </p>
      </div>
      <ul className="grid 2xl:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-1 gap-12 px-[5vw] pb-[10vh] ">
        {data &&
          data.map((service, index) => {
            const imgURL = `${service.img}`;
            const title = `${service.name}`;
            return (
              <li key={index}>
                <button
                  onClick={() => openModal(index)}
                  className="relative hover:img-hover shadow-md img-rounded "
                >
                  <img
                    src={imgURL}
                    alt={title}
                    className="w-full img-rounded saturate-90 opacity-80"
                  />
                  <div className="absolute my-auto inset-0 backdrop-blur-[4px] bg-white/70 w-full h-[15rem] opacity-90 lg:h-[12rem] max-lg:h-[10rem] "></div>
                  <h3
                    style={{
                      backgroundImage: `url(${imgURL})`,
                      backgroundSize: "cover",
                      filter: "opacity(65%) brightness(75%)",
                    }}
                    className="h-full absolute font-semibold bottom-0 left-0 2xl:text-[3.5rem] lg:text-[3rem] max-lg:text-[2.5rem] bg-clip-text text-transparent flex items-center justify-center text-wrap "
                  >
                    {title.toUpperCase()}
                  </h3>
                  <div className="absolute inset-0  bg-black/10  img-rounded w-full h-full hover:bg-black/0 "></div>
                </button>
                {modalOpenIndex === index && (
                  <ServiceModal
                    isOpen={true}
                    onClose={closeModal}
                    title={title}
                    description={service.description}
                    duration={service.duration}
                    price={service.price}
                    imgURL={imgURL}
                  />
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Service

