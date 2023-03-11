import React from 'react';
import { pricingData } from './data';
import PricingCard from './PricingCard/PricingCard';

export const MembershipFees = () => {
  return (
    <div className="py-6 md:py-12 mt-auto flex flex-col items-center w-full bg-white px-8" data-aos="fade-up">
      <div className="flex flex-col max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide max-w-xl mx-auto">
          Pay Membership Fee
        </h1>

        <p className="max-w-xl mx-auto text-center text-grey-601 mt-3">
          Choose a plan that’s right for you and join a community that
          everyone wants to join
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-6 md:mt-8">
          {pricingData.map((element, index) => (
            <PricingCard
              key={element.title}
              data={element}
              isPrimary={index === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
