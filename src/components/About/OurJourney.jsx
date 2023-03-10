import React from 'react';
import bg from '../../assets/images/about/bg-journey.png';
import { journeyData } from './data/journey';

const OurJourney = () => {
  return (
    <div className="mt-auto flex flex-col items-center w-full bg-gray-401 px-8 py-6 md:py-12">
      <div className="flex flex-col max-w-6xl w-full">
        <h1 className="text-center tracking-wide font-black text-3xl md:text-4xl">
          We’re only just getting started on our journey
        </h1>
        <p className="max-w-xl text-center mx-auto mt-3 md:mt-4">
          Our achievements in the journey depicted in numbers
        </p>

        <div
          className="flex flex-wrap justify-center items-center bg-no-repeat bg-left-top mt-6 md:mt-10 gap-5 gap-x-10 min-h-[360px] w-full"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {journeyData.map((journey, index) => (
            <div className="flex space-y-3 md:space-y-6 flex-col bg-white/30 backdrop-blur border-white border min-h-[232px] w-[341.33px] py-8 px-4">
              <div className="flex flex-col items-center text-center">
                <p className="text-3xl md:text-4xl font-black text-white">
                  {journey.count}
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {journey.title}
                </h2>
                <p className="text-white">{journey.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
