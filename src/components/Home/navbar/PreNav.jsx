import React from "react";
import { menuITems } from "./data";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/icons/logo_white.png";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";

export const PreNav = ({ showMenu, onClick }) => {
  return (
    <div className="bg-[#0b450c] h-full flex items-center px-4 lg:px-16 justify-between">
      <div className="w-24 bg-transparent">
        {/* <h1 className="text-2xl font-bold text-white">RUPI</h1> */}
        <img src={logo} alt="RUPI logo" />
      </div>
      <div className="hidden md:flex justify-end w-full items-center space-x-4 lg:space-x-10 xl:space-x-12">
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
      <div className="md:hidden" onClick={onClick}>
        {showMenu ? (
          <FaRegTimesCircle className="text-red-700 text-3xl" />
        ) : (
          <FaBars className="text-2xl text-white" />
        )}
      </div>
    </div>
  );
};
