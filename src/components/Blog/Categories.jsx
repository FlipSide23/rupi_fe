import React from 'react';
import { categories } from '../../pages/blog/data/categories';

const Categories = ({ active, onClick }) => {
  return (
    <div className="w-full md:w-2/5 px-4 md:px-0">
      <h1 className="text-lg font-semibold">Categories</h1>
      <div className="">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={`${
                active === category.id
                  ? 'bg-green text-white md:sticky top-16'
                  : ''
              } cursor-pointer shadow-lg text-center m-8 md:m-0 p-16 font-semibold text-slate-500 shadow-neutral-400 md:mt-4 rounded-lg hover:shadow-md`}
              onClick={() => onClick(category.id)}
            >
              {category.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
