import React from 'react';

export const Subscribe = () => {
  return (
    <div className="mt-auto flex flex-col items-center w-full bg-white py-6 md:py-12 px-8">
      <div className="w-full p-8 md:p-12 flex flex-col max-w-6xl bg-gradient-to-br from-[#395C4D] to-[#132D1F]" data-aos="flip-left">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-center max-w-xl leading-relaxed tracking-wide text-xl md:text-2xl font-bold text-white">
            Subscribe on our newsletter to get information, updates
            and other interesting topics about RUPI
          </p>

          <div className="flex flex-col md:flex-row gap-2 items-center w-full max-w-2xl mt-6 md:mt-12">
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-3 md:px-6 rounded-full flex-grow max-w-4xl w-full"
            />
            <button className="rounded-full text-white font-semibold py-3 px-12 bg-gradient-to-r from-[#98AA28] to-[#D6FF7E]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
