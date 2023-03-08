import { useEffect, useState } from "react";
import { Header } from "./Header";
import logo from "../../../assets/images/icons/logo.jpg";
import { menuITems } from "./data";
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { PreNav } from "./PreNav";

export const Nav = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const windowScrollTop = window.scrollY;

    if (windowScrollTop > 144) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="h-36 flex pl-8 py-2">
          <img src={logo} alt="RUPI Logo" className="h-32 object-fill" />
        </div>
        <div className="relative w-full">
          <div className="h-36 absolute top-0 left-0 bottom-0">
            <div className="triangle-up"></div>
          </div>
          <div className="bg-red-500 h-36 flex flex-col w-full">
            <div className="bg-neutral-700 h-full flex">
              <div className="w-16 h-full bg-transparent"></div>
              <div className="flex justify-evenly w-full items-center text-white">
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt />
                  <p>+250788619790</p>
                </div>
                <div className="flex text-xl space-x-16">
                  <FaFacebookSquare />
                  <FaInstagramSquare />
                  <FaTwitterSquare />
                </div>
                <div>
                  <NavLink
                    to="/login"
                    className="text-xs border border-neutral-400 py-3 px-5 rounded-full duration-300 hover:bg-white hover:text-green hover:font-semibold"
                  >
                    Login / Sign Up
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="bg-[#0b450c] h-full flex">
              <div className="w-24 h-full bg-transparent"></div>
              <div className="flex justify-evenly w-full items-center">
                {/* <ul> */}
                {menuITems.map((item, index) => {
                  return (
                    <NavLink
                      to={item.url}
                      key={index}
                      className="text-white py-1.5 hover:border-b-[2px] hover:border-white transition duration-300 ease-out"
                    >
                      {item.text}
                    </NavLink>
                  );
                })}
                {/* </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSticky ? (
        <div className="fixed top-0 z-50 w-full h-16">
          <PreNav />
        </div>
      ) : null}
    </div>
  );
};
