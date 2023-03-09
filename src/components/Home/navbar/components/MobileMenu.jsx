import React from 'react'
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";

const MobileMenu = ({menuITems}) => {
  return (
    <>
      <div className="flex justify-end">
        <div className="border-b-[#000000bd] border-b-[20px] border-l-[15px] border-r-[15px] border-r-transparent border-l-transparent w-0 h-0 mr-4"></div>
      </div>
      <div className="bg-[#000000bd] pb-8">
        <nav className="flex flex-col">
          {menuITems.map((item, index) => {
            return (
              <NavLink
                to={item.url}
                key={index}
                className="py-3 px-8 hover:border-b-[2px] transition duration-300 ease-out"
              >
                {item.text}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex justify-center my-4 items-center space-x-2">
          <FaPhoneAlt />
          <p>+250788619790</p>
        </div>
        <div className="flex justify-center text-xl space-x-16 my-2">
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaTwitterSquare />
        </div>
      </div>
    </>
  );
}

export default MobileMenu