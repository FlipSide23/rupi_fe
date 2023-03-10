import React from 'react';
import about from '../../assets/images/about/header.png';

const AboutHeader = () => {
  return (
    <div
      className="min-h-[342px] flex flex-col items-center justify-center w-full text-white text-center px-8 py-6 md:py-12 bg-top bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="space-y-3 flex flex-col max-w-6xl items-center">
        <h1 className="text-2xl md:text-3xl font-black tracking-wide text-brand-green">
          About Us
        </h1>
        <h2 className="text-3xl md:text-4xl font-black tracking-wide">
          About RUPI
        </h2>
        <p className="">
          Learn more about RUPI and the team behind it
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
