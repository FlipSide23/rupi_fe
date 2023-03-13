import React from 'react';
import about from '../../assets/images/about/header.png';

const AboutHeader = ({
  title = 'About Us',
  subTitle = 'About RUPI',
  details = 'Learn more about RUPI and the team behind it',
}) => {
  return (
    <div
      className="min-h-[342px] flex flex-col items-center justify-center w-full text-white px-8 py-6 md:py-12 bg-top bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="flex flex-col max-w-6xl">
        <h1
          className="text-center font-black tracking-wide text-brand-green"
          data-aos="zoom-in"
        >
          {title}
        </h1>
        <h2
          className="mt-2 text-center text-3xl md:text-4xl font-black tracking-wide"
          data-aos="zoom-in"
        >
          {subTitle}
        </h2>
        <p className="mt-3 text-center" data-aos="zoom-in">
          {details}
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
