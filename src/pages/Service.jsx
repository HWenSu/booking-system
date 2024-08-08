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
        <p className="mb-6">Please check below for our services</p>
        <FontAwesomeIcon
          icon={faPagelines}
          style={{ color: "#b4a69c" }}
          size="2xl"
        />
      </div>
      <ul className="flex">
        {services.map((service, index) => (
          <li key={index}>
            <a href="">
              <img src={service.url} alt={service.item} />
              <h3>{service.item}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Service

