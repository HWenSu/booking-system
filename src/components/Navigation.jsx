// import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="">
          <li>
            <Link to="/" className="">
              <h1>
                <img src="" alt="" />
              </h1>
            </Link>
          </li>
          <li>
            <Link to="miumiu-spa/service">Service</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation