// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="flex bg-primary items-center justify-between h-28 ">
          <li className="basis-40">
            <Link to="/" className="">
              <h1 className="min-w-40">
                <img
                  src={logo}
                  alt="miumiu-spa"
                  className="size-40 "
                />
              </h1>
            </Link>
          </li>
          <div className=" flex mr-[2rem] text-[18px] text-tertiary ">
            <li className="hover:link-hover ">
              <Link to="/" className="p-3">
                Home
              </Link>
            </li>
            <li className="hover:link-hover">
              <Link to="miumiu-spa/services" className="p-3">
                Service
              </Link>
            </li>
            <li className="hover:link-hover">
              <Link to="miumiu-spa/staff" className="p-3">
                Staff
              </Link>
            </li>
            <li className="hover:link-hover">
              <Link to="miumiu-spa/orders" className="p-3">
                Booking
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation