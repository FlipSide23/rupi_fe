import React from 'react';

export const Count = () => {
  return (
    <div className="text-white text-center py-6 md:py-12 mt-auto flex flex-col items-center w-full bg-brand-green px-8">
      <div className="flex flex-col max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide max-w-4xl text-center mx-auto">
          Some count that matters
        </h1>

        <p className="max-w-2xl mx-auto text-center mt-3">
          Our achievement in the journey depicted in numbers
        </p>

        <div className="grid md:grid-cols-3 gap-x-3 md:gap-x-10 gap-y-3 mt-6">
          <div className="flex flex-col space-y-2 items-center">
            <p className="text-3xl md:text-4xl font-black">100+</p>
            <p className="">Partners</p>
          </div>
          <div className="flex flex-col space-y-2 items-center md:border-x border-white md:px-10">
            <p className="text-3xl md:text-4xl font-black">300+</p>
            <p className="">Taken business legalities</p>
          </div>

          <div className="flex flex-col space-y-2 items-center">
            <p className="text-3xl md:text-4xl font-black">8</p>
            <p className="">Years of Journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};
