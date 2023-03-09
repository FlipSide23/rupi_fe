import React from 'react';
import { pricingData } from '../data';
import { NavLink } from 'react-router-dom';

const PricingCard = ({
  data = pricingData[0],
  isPrimary = false,
}) => {
  return (
    <div className="border border-gray-101 flex flex-col items-center shadow-md space-y-4 md:space-y-6 bg-white rounded-md p-8 py-12">
      <h2 className="md:text-lg font-bold uppercase text-green-802">
        {data.title}
      </h2>
      <p className="text-2xl md:text-4xl text-green-802">
        {data.price}
      </p>
      <div className="flex flex-col space-y-2">
        {data.features.map((feature, index) => (
          <p
            key={index}
            className={`${
              feature.active ? 'text-black' : 'text-grey-601'
            } flex items-center space-x-2`}
          >
            {feature.icon}
            <span>{feature.text}</span>
          </p>
        ))}
      </div>

      <NavLink
        to="/pay"
        className={`border border-green-702 px-12 py-3 rounded-md font-semibold tracking-wide ${
          isPrimary ? 'text-white bg-green-702' : 'text-green-702'
        }`}
      >
        Pay now
      </NavLink>
    </div>
  );
};

export default PricingCard;
