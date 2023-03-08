import { useState } from "react";
import { NavLink } from "react-router-dom";
import { dots, services } from "./data";
import { FaArrowRight } from "react-icons/fa";

export const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="px-16 py-8 text-center bg-[#F6FBF9]">
      <h1 className="font-bold text-2xl">How can we help you?</h1>
      <p className="py-6 text-sm text-neutral-400">
        Let's do great work together
      </p>
      <div className="mt-4">
        <div className="flex justify-center mb-12">
          {Object.keys(services).map((i, index) => {
            const service = services[i];
            const isLast = Object.keys(services).length - 1 == index;
            return (
              <div
                className="flex items-center"
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
        <div className="flex flex-row justify-center space-x-12">
          {Object.keys(services).map((i, index) => {
            const service = services[i];
            return (
              <p
                className={`text-sm font-semibold cursor-pointer ${
                  selectedService == i ? "text-green" : ""
                }`}
                key={index}
                onClick={() => setSelectedService(i)}
              >
                {service.title}
              </p>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-12">
        <NavLink
          to={services[selectedService].url}
          className="text-sm underline text-green font-semibold flex justify-center text-center items-center space-x-4"
        >
          <span>See More</span>
          <FaArrowRight />
        </NavLink>
      </div>
    </div>
  );
};
