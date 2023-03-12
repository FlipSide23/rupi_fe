import React from 'react';
import { whyData } from './data';
import WhyCard from './WhyCard/WhyCard';

export const Why = () => {
  return (
    <div className="py-6 md:py-12 mt-auto flex flex-col items-center w-full bg-gray-301 px-8" data-aos="fade-up">
      <div className="flex flex-col max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-y-5 gap-x-10">
          <div className="flex flex-col py-6 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide max-w-xl">
              Why do we help with urbanization?
            </h1>

            <p className="max-w-xl text-grey-601 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec ac purus eget odio consequat eleifend. Etiam vel
              eleifend augue.
            </p>
          </div>

          <div className="lg:w-[60%] grid sm:grid-cols-2 gap-5 md:gap-y-8 gap-x-12">
            {whyData.map(element => (
              <WhyCard
                key={element.title}
                title={element.title}
                icon={element.icon}
                description={element.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
