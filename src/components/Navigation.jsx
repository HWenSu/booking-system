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

  //連結點擊時側邊欄關閉
  const toggleLink = () => {
    if(isOpen){
      setIsOpen(false)
    }
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
          <button className="block m-4 md:hidden z-50" onClick={toggleMenu}>
            { !isOpen? (
              // 漢堡圖案
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
            </svg> ) : 
            (
              // 叉叉圖案
              <svg
          id="close-icon"
          className="w-6 h-6 text-highlight"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
            )
          }
          </button>
          {/* 導航連結 */}
          <ul
            className={`text-[1.2rem] items-center animate-slide-in z-40 ${
              isOpen ? "block sideNavBar" : "hidden "
            } 
            md:flex 
            `}
          >
            <li className="hover:link-hover">
              <Link to="/" className="p-4" onClick={toggleLink}>
                HOME
              </Link>
            </li>
            <li className="hover:link-hover">
              <Link to="miumiu-spa/services" className="p-4" onClick={toggleLink}>
                SERVICE
              </Link>
            </li>
            <li className="hover:link-hover">
              <Link to="miumiu-spa/staff" className="p-4" onClick={toggleLink}>
                STAFF
              </Link>
            </li>
            <li className="hover:link-hover">
              <Link to="miumiu-spa/orders" className="p-4" onClick={toggleLink}>
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
            {/* 模糊背景 */}
            <div className={`blur-bg ${isOpen? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={toggleMenu}
            >
            </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation