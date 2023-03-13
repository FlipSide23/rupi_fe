import React from 'react';
import StarIcon from '../../assets/images/icons/svg/StarIcon';
import avatar from '../../assets/images/about/avatar.png';
import { membersData } from './data/members';
import { NavLink } from 'react-router-dom';

const OurMission = () => {
  return (
    <div className="mt-auto flex flex-col items-center w-full bg-white px-8 py-6 md:py-12" data-aos="fade-up">
      <div className="flex flex-col gap-4 md:gap-x-16 md:justify-between md:items-center items-start md:flex-row max-w-6xl w-full">
        <div className="flex space-y-3 md:space-y-6 flex-col">
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map(item => (
              <StarIcon key={item} width={24} height={24} />
            ))}
          </div>
          <p className="max-w-xl font-semibold tracking-wide text-lg md:text-xl leading-relaxed">
            “Our mission is to connect the best and talented
            professional urban planners from all over the world.”
          </p>
          <div className="flex space-x-4 items-start">
            <img
              src={avatar}
              alt=""
              width={48}
              height={48}
              className="rounded-full object-contain"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">
                Alice Muhawenimana
              </h3>
              <p className="">Founder and CEO, RUPI</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap w-full md:max-w-[30%] gap-y-4 gap-x-[4%] md:mx-auto">
          {membersData.map((member, index) => (
            <NavLink
              to="#"
              className="shrink-0 flex flex-col w-[46%]"
            >
              <img
                src={member.image}
                height={member.height}
                className={`${member.top && 'mt-auto'} ${
                  index > 1 && 'md:-translate-x-4'
                }`}
                alt=""
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
