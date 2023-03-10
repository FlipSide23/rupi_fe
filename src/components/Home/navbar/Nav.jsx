import { useEffect, useState } from 'react';
import { Header } from './Header';
import logo from '../../../assets/images/icons/logo.jpg';
import { menuITems } from './data';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaRegTimesCircle,
  FaTwitterSquare,
} from 'react-icons/fa';
import { PreNav } from './PreNav';
import MobileMenu from './components/MobileMenu';

export const Nav = () => {
  const [isSticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showPreMenu, setPreShowMenu] = useState(false);

  const handleScroll = () => {
    const windowScrollTop = window.scrollY;

    if (windowScrollTop > 144) {
      setSticky(true);
      setShowMenu(false);
    } else {
      setSticky(false);
      setPreShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="flex shadow shadow-[#031f0e2e]">
            <div className="h-36 flex pl-8 py-2 bg-white">
              <img
                src={logo}
                alt="RUPI Logo"
                className="h-32 object-fill"
              />
            </div>
            <div className="relative w-full">
              <div className="h-36 absolute top-0 left-0 bottom-0">
                <div className="triangle-up"></div>
              </div>
              <div className="h-36 flex flex-col w-full">
                <div className="bg-[url('../images/nav/bg.jpg')] h-full flex">
                  <div className="hidden md:block w-16 h-full bg-transparent"></div>
                  <div className="flex justify-end md:justify-evenly w-full items-center text-white pr-2">
                    <div className="hidden md:flex items-center space-x-2">
                      <FaPhoneAlt />
                      <p>+250788619790</p>
                    </div>
                    <div className="hidden md:flex text-xl space-x-16">
                      <FaFacebookSquare />
                      <FaInstagramSquare />
                      <FaTwitterSquare />
                    </div>
                    <div>
                      <NavLink
                        to="/login"
                        className="text-xs border border-neutral-400 py-2 px-3 md:py-3 md:px-5 rounded-full duration-300 hover:bg-white hover:text-green hover:font-semibold"
                      >
                        Login / Sign Up
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div
                  className={`h-full flex ${
                    isHome ? 'bg-[#031f0e2e]' : 'bg-[#0b450c]'
                  }`}
                >
                  <div className="w-24 h-full bg-transparent"></div>
                  <div
                    className="flex md:hidden justify-end w-full items-center px-4 text-white text-2xl"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {showMenu ? (
                      <FaRegTimesCircle className="text-red-700 text-3xl" />
                    ) : (
                      <FaBars />
                    )}
                  </div>

                  <div className="hidden md:flex justify-evenly w-full items-center">
                    {/* <ul> */}
                    {menuITems.map((item, index) => {
                      return (
                        <NavLink
                          to={item.url}
                          key={index}
                          className="text-white py-1.5 hover:border-b-[2px] hover:border-white transition duration-300 ease-out"
                        >
                          {item.text}
                        </NavLink>
                      );
                    })}
                    {/* </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation menu on mobile view */}
        {showMenu && (
          <div
            className={`absolute z-30 top-36 md:hidden flex-col w-full text-white`}
          >
            <MobileMenu menuITems={menuITems} />
          </div>
        )}
        {showPreMenu && (
          <div
            className={`fixed z-30 top-16 md:hidden flex-col w-full text-white`}
          >
            <MobileMenu menuITems={menuITems} />
          </div>
        )}

        <div className={`${isHome ? 'pt-16' : 'pt-36'}`}>
          {isHome && <Header />}
        </div>
      </div>
      {isSticky ? (
        <div className="fixed top-0 z-50 w-full h-16">
          <PreNav
            showMenu={showPreMenu}
            onClick={() => setPreShowMenu(!showPreMenu)}
          />
        </div>
      ) : null}
    </div>
  );
};
