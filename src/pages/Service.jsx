// import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";

import express from "../images/Express.png";
import foot from"../images/Foot.jpg"
import hotStone from"../images/Hot-stone.jpg"
import ginger from "../images/Ginger-oil.jpg"
import thai from "../images/Thai.jpeg"
import shiatsu from "../images/Shiatsu.jpeg"


const Service = () => {
  // const [ staff, setStaff ] = useState( '')
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
      <div className="my-6">
        <h2>OUR SERVICE</h2>
        <FontAwesomeIcon
          icon={faPagelines}
          style={{ color: "#b4a69c" }}
          size="2xl"
          className="my-6"
        />
        <p>Please check below for our services</p>
      </div>
      <ul className="grid grid-cols-3 gap-8 px-[5vw]">
        {services.map((service, index) => (
          <li key={index} className="relative">
            <div className="overflow-hidden">
              <img
                src={service.url}
                alt={service.item}
                className="w-full opacity-60 blur-[4px]"
              />
            </div>
            <h3
              style={{
                backgroundImage: `url(${service.url})`,
                backgroundSize: 'cover',
              }}
              className=" w-full h-full absolute bottom-0 left-0 text-[80px] text-justify bg-clip-text text-transparent "
            >
              {service.item.toUpperCase()}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Service

