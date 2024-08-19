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
    { item: "Express massage", url: express, price: 1000, duration: [60, 90], description: "Along with the hurried pace of life at the moment, your job occupies a lot of your time. It is the pressure at work and worries in life that reduce your health. Understanding the need to relax, miumiu offers express massage services that you can use regularly and do not take too much time to have a golden health." },
    { item: "Foot massage", url: foot,  price: 1500, duration: [60, 90], description: "Along with the hurried pace of life at the moment, your job occupies a lot of your time. It is the pressure at work and worries in life that reduce your health. Understanding the need to relax, miumiu offers express massage services that you can use regularly and do not take too much time to have a golden health." },
    { item: "Hot stone massage", url: hotStone,  price: 1800, duration: [60, 90, 100], description: "Along with the hurried pace of life at the moment, your job occupies a lot of your time. It is the pressure at work and worries in life that reduce your health. Understanding the need to relax, miumiu offers express massage services that you can use regularly and do not take too much time to have a golden health." },
    { item: "Ginger oil massage", url: ginger,  price: 1300, duration: [60, 90, 100, 200], description: "Along with the hurried pace of life at the moment, your job occupies a lot of your time. It is the pressure at work and worries in life that reduce your health. Understanding the need to relax, miumiu offers express massage services that you can use regularly and do not take too much time to have a golden health." },
    { item: "Thai massage", url: thai,  price: 1900, duration: [60, 90], description: "Along with the hurried pace of life at the moment, your job occupies a lot of your time. It is the pressure at work and worries in life that reduce your health. Understanding the need to relax, miumiu offers express massage services that you can use regularly and do not take too much time to have a golden health." },
    { item: "Shiatsu massage", url: shiatsu,  price: 2000, duration: [60], description: "Along with the hurried pace of life at the moment, your job occupies a lot of your time. It is the pressure at work and worries in life that reduce your health. Understanding the need to relax, miumiu offers express massage services that you can use regularly and do not take too much time to have a golden health." },
  ];

  return (
    <div className="my-8">
      <div className="my-10">
        <h2 className="text-tertiary font-semibold text-[3rem] animate-fade-in-title">OUR SERVICE</h2>
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
                description={ service.description }
                duration={service.duration}
                price={ service.price }
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

