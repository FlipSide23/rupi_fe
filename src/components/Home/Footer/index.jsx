import React from 'react';
import { footerNavItems, socialMedia } from './data';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/icons/logo.jpg';
import { partners } from '../Partners/data/partners';

export const Footer = () => {
  const firstLinks = footerNavItems.slice(0, 8);
  const otherLinks = footerNavItems.slice(8);
  return (
    <div className="mt-auto flex flex-col items-center w-full bg-white text-grey-601 px-8">
      <div className="flex flex-col max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-3 md:gap-x-20 lg:gap-x-32 gap-y-5 py-3">
          <div className="col-span-full md:col-span-1 lg:col-span-2 flex flex-col space-y-3">
            <NavLink to="/">
              <img
                src={logo}
                alt=""
                className="object-contain"
                width={268}
                height={188}
              />
            </NavLink>
            <p className="leading-tight text-sm">
              RUPI is an institution where professional urban planners
              meet to colaborate and form a network
            </p>

            <div className="flex flex-wrap items-center space-x-3">
              {socialMedia.map((media, index) => (
                <a
                  key={media.name}
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-2 rounded-full bg-green-401"
                >
                  {media.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-dark-green">Menu</h3>
            <div className="flex flex-col space-y-2 mt-3">
              {firstLinks.map((link, index) => (
                <NavLink to={link.url} className="">
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-dark-green">Other Links</h3>
            <div className="flex flex-col space-y-2 mt-3">
              {otherLinks.map((link, index) => (
                <NavLink to={link.url} className="">
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-dark-green">Partners</h3>
            <div className="flex flex-col space-y-2 mt-3">
              {partners.map((partner, index) => (
                <NavLink to={partner.link} className="">
                  {partner.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center px-8 py-3 w-full border-t border-[#14183E26] mt-3">
        &copy; Copyright RUPI | All right reserved
      </p>
    </div>
  );
};
