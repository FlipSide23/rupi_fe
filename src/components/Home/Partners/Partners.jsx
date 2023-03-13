import React from 'react';
import FastMarquee from 'react-fast-marquee';
import Partner from './Partner/Partner';

export const Partners = () => {
  return (
    <div className="py-6 md:py-12 mt-auto flex flex-col items-center w-full bg-gray-201 px-8">
      <div className="flex flex-col max-w-6xl w-full overflow-x-hidden">
        <FastMarquee direction="right" gradient={false}>
          {new Array(10).fill(0).map((item, index) => (
            <Partner key={index} name={item.name} logo={item.logo} />
          ))}
        </FastMarquee>
      </div>
    </div>
  );
};
