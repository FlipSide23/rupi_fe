import React from 'react';
import Blogs from '../../components/Blog/Blogs';
import { blogs } from './data/blogs';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Author = () => {
  return (
    <div className="md:p-8 md:px-16">
      <div className="bg-slate-100 p-6 rounded-lg text-grey-601">
        <div className="md:w-1/2 mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg"
              alt="Author name"
              className="rounded-full w-24 h-24"
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-black text-lg">
                Steve Ndicunguye
              </h2>
              <p className="text-sm">Software Developer</p>
            </div>
          </div>
          <p className="text-center my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed non risus. Suspendisse lectus tortor, dignissim sit
            amet, adipiscing nec, ultricies sed, dolor. Cras elementum
            ultrices diam. Maecenas ligula massa, varius a, semper
            congue, euismod non, mi. Proin porttitor, orci nec nonummy
            molestie.
          </p>
          <div className="flex justify-center space-x-2">
            {[
              <FaFacebook />,
              <FaInstagram />,
              <FaTwitter />,
              <FaYoutube />,
            ].map(icon => {
              return (
                <Link
                  to="/"
                  className="bg-green text-white p-2 text-sm rounded-md hover:bg-slate-400"
                >
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <h1 className="text-xl font-semibold my-4 mx-4 md:mx-0">
        Steve's posts
      </h1>
      <Blogs blogs={blogs} cols={3} />
    </div>
  );
};

export default Author;
