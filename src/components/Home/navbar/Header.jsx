import React from "react";
import { NavLink } from "react-router-dom";
import headerImage from "../../../assets/images/header/headerImage.jpg";

export const Header = () => {
  return (
    <div className="relative">
      <div>
        <img
          src={headerImage}
          alt="header introduction"
          className="object-cover h-[640px]"
        />
      </div>
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-[#063c1f9d] flex flex-col justify-center items-center px-4 md:px-36 text-center">
        <div className="flex justify-center items-end space-x-2 md:space-x-12">
          <div className="w-20 h-1 mb-1 bg-neutral-400"></div>
          <h2 className="font-bold text-neutral-300 text-3xl">The Best</h2>
          <div className="w-20 h-1 mb-1 bg-neutral-400"></div>
        </div>

        <h1 className="text-6xl font-bold text-white my-12">
          Urban Planning Institute
        </h1>
        <p className="text-neutral-400 text-lg">
          A community with professional urban planners where you can easily
          enter the most precegious network in the field of urban planning
        </p>
        <div className="mt-12">
          <NavLink
            to="/join-us"
            className="bg-green text-white py-3 px-8 text-sm rounded-full shadow hover:shadow-none"
          >
            Join RUPI
          </NavLink>
        </div>
      </div>
    </div>
  );
};
