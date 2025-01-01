import { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "/public/modals/images/logo.png"
import { useTheme } from "../context/ThemeContext";

const Navigation = () => {
  //獲取切換主題的函示
  const { toggleTheme } = useTheme()

  //控制導航是否顯示
  const [isOpen, setIsOpen] = useState(false)

  //漢堡按鈕點擊時切換
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    
  }

  return (
    <div>
      <nav>
        <ul className="flex bg-secondary items-center justify-between bg-fixed px-5">
          <li className="basis-40">
            <Link to="/">
              <h1 className="min-w-40">
                <img
                  src={logo}
                  alt="miumiu-spa"
                  className="size-24 md:size-40 "
                />
              </h1>
            </Link>
          </li>
          {/* 漢堡按鈕 */}
          <button className="block m-4 md:hidden" onClick={toggleMenu}>
            <svg
              id="open-icon"
              className="w-6 h-6 text-highlight block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* 導航連結 */}
          <ul
            className={`text-[1.2rem] items-center animate-slide-in ${
              isOpen ? "block sideNavBar" : "hidden "
            } 
            md:flex 
            `}
          >
            <li className="hover:link-hover ">
              <Link to="/" className="p-4">
                HOME
              </Link>
            </li>
            <li className="hover:link-hover">
              <Link to="miumiu-spa/services" className="p-4">
                SERVICE
              </Link>
            </li>
            <li className="hover:link-hover">
              <Link to="miumiu-spa/staff" className="p-4">
                STAFF
              </Link>
            </li>
            <li className="hover:link-hover">
              <Link to="miumiu-spa/orders" className="p-4">
                BOOKING
              </Link>
            </li>
            <button
              className="bg-tertiary text-highlight text-sm rounded-full p-4 text-center w-20 hover:link-hover my-5"
              onClick={toggleTheme}
            >
              Change Theme
            </button>
          </ul>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation