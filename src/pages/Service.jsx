import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import ServiceModal from "../components/ServiceModal";

import express from "../images/Express.png";
import foot from"../images/Foot.jpg"
import hotStone from"../images/Hot-stone.jpg"
import ginger from "../images/Ginger-oil.jpg"
import thai from "../images/Thai.jpeg"
import shiatsu from "../images/Shiatsu.jpeg"


const Service = () => {
  
  const [ modalOpenIndex, setModalOpenIndex ] = useState(null)

  const openModal = (index) => setModalOpenIndex(index);
  const closeModal = () => setModalOpenIndex(null);

  const services = [
    { item: "Express massage", url: express },
    { item: "Foot massage", url: foot },
    { item: "Hot stone massage", url: hotStone },
    { item: "Ginger oil massage", url: ginger },
    { item: "Thai massage", url: thai },
    { item: "Shiatsu massage", url: shiatsu },
  ];

  return (
    <div className="my-8">
      <div className="my-10">
        <h2 className="text-tertiary font-semibold text-[3rem]">OUR SERVICE</h2>
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
      <ul className="grid xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 gap-12 px-[5vw] pb-[10vh] ">
        {services.map((service, index) => (
          <li key={index}>
            <button
              onClick={() => openModal(index)}
              className="relative hover:img-hover shadow-md img-rounded "
            >
              <img
                src={service.url}
                alt={service.item}
                className="w-full img-rounded saturate-90 opacity-80"
              />
              <div className="absolute my-auto inset-0 backdrop-blur-[4px] bg-white/70 w-full h-[15rem] opacity-90 lg:h-[12rem] max-lg:h-[10rem] "></div>
              <h3
                style={{
                  backgroundImage: `url(${service.url})`,
                  backgroundSize: "cover",
                  filter: "opacity(65%) brightness(75%)",
                }}
                className="h-full absolute font-semibold bottom-0 left-0 2xl:text-[3.5rem] lg:text-[3rem] max-lg:text-[2.5rem] bg-clip-text text-transparent flex items-center justify-center text-wrap "
              >
                {service.item.toUpperCase()}
              </h3>
              <div className="absolute inset-0  bg-black/10  img-rounded w-full h-full hover:bg-black/0 "></div>
            </button>
            {modalOpenIndex === index && (
              <ServiceModal
                isOpen={true}
                onClose={closeModal}
                title={service.item}
                info={
                  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum"
                }
                duration={["60 min", "90 min"]}
                imgURL={service.url}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Service

