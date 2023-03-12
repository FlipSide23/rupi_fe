import { useState } from "react";
import { NavLink } from "react-router-dom";
import { dots, services } from "./data";
import { FaArrowRight } from "react-icons/fa";

export const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="px-16 py-8 text-center bg-[#F6FBF9]" data-aos="fade-right">
      <h1 className="font-bold text-2xl">How can we help you?</h1>
      <p className="py-6 text-sm text-neutral-400">
        Let's do great work together
      </p>
      <div className="mt-4 flex md:flex-col space-x-6 md:space-x-0 justify-center">
        <div className="flex justify-center mb-3 md:mb-12 flex-col md:flex-row">
          {Object.keys(services).map((i, index) => {
            const service = services[i];
            const isLast = Object.keys(services).length - 1 == index;
            return (
              <div
                className="flex items-center flex-col md:flex-row"
                key={index}
                onClick={() => setSelectedService(i)}
              >
                <div
                  className={`h-6 w-6  border border-green rounded-full mx-2 ${
                    selectedService == i ? "bg-green" : "bg-white"
                  }`}
                ></div>

                {!isLast && dots}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-start space-y-7 md:space-y-0 md:flex-row md:justify-center md:space-x-28 text-left md:text-center">
          {Object.keys(services).map((i, index) => {
            const service = services[i];
            return (
              <NavLink
                to={service.url}
                className={`text-sm font-semibold cursor-pointer ${
                  selectedService == i ? "text-green" : ""
                }`}
                key={index}
              >
                {service.title}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-12">
        <NavLink
          to="/services"
          className="text-sm underline text-green font-semibold flex justify-center text-center items-center space-x-4"
        >
          <span>See More</span>
          <FaArrowRight />
        </NavLink>
      </div>
    </div>
  );
};
