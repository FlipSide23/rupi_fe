import React from 'react';
import { availableServices } from './data/service';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({ service = availableServices[0] }) => {
  return (
    <div className="relative flex flex-col pt-2 pb-8">
      <div className="z-10 flex h-full flex-col bg-white rounded-xl p-8 md:p-12">
        <h1 className="font-semibold text-lg tracking-wide">
          {service.title}
        </h1>
        <p className="mt-3 md:mt-4 text-sm">{service.details}</p>
        <div className="mt-auto flex-col items-start pt-8 md:pt-12">
          <NavLink
            to={service.payLink}
            className="rounded-[6px] py-3 px-4 transform hover:scale-110 transition duration-300 bg-brand-green text-white font-semibold tracking-wide"
          >
            {service.linkLabel}
          </NavLink>
        </div>
      </div>
      <div className="-rotate-2 translate-x-6 z-0 top-0 left-0 absolute flex-grow w-full h-full bg-brand-green rounded-xl" />
    </div>
  );
};

export default ServiceCard;
