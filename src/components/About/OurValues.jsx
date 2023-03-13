import React from 'react';
import { companyValues } from './data/values';

const OurValues = () => {
  return (
    <div className="mt-auto flex flex-col items-center w-full bg-gray-401 px-8 py-6 md:py-12" data-aos="fade-up">
      <div className="flex flex-col max-w-6xl w-full">
        <h1 className="text-center text-lg md:text-xl font-bold text-brand-green">
          Our Values
        </h1>

        <p className="text-center text-2xl md:text-3xl font-bold mt-3 md:mt-4 max-w-xl mx-auto">
          We’re an ambitious and smart team with a shared mission
        </p>
        <p className="mt-3 md:mt-4 text-center max-w-xl mx-auto">
          We work based on the following values
        </p>

        <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 gap-x-10">
          {companyValues.map((value, index) => (
            <div className="flex flex-col space-y-3 items-center text-center">
              <p className="rounded-full p-3 flex flex-col items-center justify-center bg-[#D9D9D9]">
                {value.icon}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold">
                {value.title}
              </h3>

              <p className="">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
