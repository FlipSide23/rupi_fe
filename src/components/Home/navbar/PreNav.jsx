import React from "react";
import { menuITems } from "./data";
import { NavLink } from "react-router-dom";

export const PreNav = () => {
  return (
    <div className="bg-[#0b450c] h-full flex items-center px-16">
      <div className="w-24 bg-transparent">
        <h1 className="text-2xl font-bold text-white">RUPI</h1>
      </div>
      <div className="flex justify-end w-full items-center space-x-12">
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
  );
};
