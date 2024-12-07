import { Link } from "react-router-dom";
import logo from "/public/modals/images/logo.png"
import { useTheme } from "../context/ThemeContext";

const Navigation = () => {
  //獲取切換主題的函示
   const { toggleTheme } = useTheme()

  return (
    <div>
      <nav>
        <ul className="flex bg-secondary items-center justify-between h-28 bg-fixed">
          <li className="basis-40">
            <Link to="/">
              <h1 className="min-w-40">
                <img src={logo} alt="miumiu-spa" className="size-40 " />
              </h1>
            </Link>
          </li>
          <div className=" flex mr-[2rem] text-[1.2rem] items-center ">
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
            <button className="bg-tertiary text-highlight text-sm rounded-full p-4 text-center w-20 hover:link-hover"
            onClick={toggleTheme}>
              Change Theme
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation