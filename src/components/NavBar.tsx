import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import navItems from "../constants/navItems";
import Items from "../constants/Links";

export default function NavBar() {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  function handleToggle() {
    setToggle((e) => !e);
  }
  function handleActive(page: string) {
    setActive(page);
  }
  return (
    <nav className="px-9 pt-2 bg-stone-100  fixed w-full z-20 top-0 ">
      <Link
        to="/"
        className="inline-block relative left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none"
        onClick={() => handleActive("/")}
      >
        <img
          src="/Logo.png"
          alt="logo"
          className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] rounded-full transition-transform duration-300 hover:scale-110"
        />
      </Link>

      <div>
        <ul className="sm:flex justify-center gap-10 hidden">
          {Items.map((e, i) => (
            <li key={i}>
              <Link
                to={e.path}
                onClick={() => handleActive(e.activeName)}
                className={
                  active === e.activeName ? e.activeStyle : e.normalStyle
                }
              >
                {e.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="cursor-pointer absolute right-6 top-2 sm:hidden z-10 ">
        {toggle && (
          <div className="relative">
            <ul className="absolute -left-36 top-5 w-fit bg-stone-100 rounded-lg shadow-lg p-2">
              {navItems.map((e, i) => (
                <li className={e.listStyle} key={i} onClick={handleToggle}>
                  <Link to={e.path} className={e.pathStyle}>
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {toggle ? (
          <IoIosCloseCircleOutline
            className="text-gray-800 text-3xl  hover:scale-110  h-[30px] w-[30px]"
            onClick={handleToggle}
          />
        ) : (
          <RxHamburgerMenu
            className="text-gray-800 text-3xl  hover:scale-110  h-[30px] w-[30px] "
            onClick={handleToggle}
          />
        )}
      </div>
    </nav>
  );
}
