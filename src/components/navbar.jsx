import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../img";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },  
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <nav id="navbar" className={`${styles.padding1} w-full flex items-center py-3 fixed top-0 z-20 bg-gray-800`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-1">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Plamen./Stathis
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 text-white">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === `/${nav.id}` ? "text-purple-200" : "text-secondary"
              } hover:text-purple-400 text-[18px] font-medium cursor-pointer`}
            >
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 violet-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-roboto font-medium cursor-pointer text-[16px] ${
                    active === `/${nav.id}` ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(`/${nav.id}`);
                  }}
                >
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
