import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPosts = ({ blogs, title }) => {
  return (
    <div className="shadow rounded-2xl mb-16 border-2 p-4 px-6">
      <div>
        <h1 className="text-lg font-bold text-center">
          {title.toUpperCase()}
        </h1>
      </div>
      <div className="mt-4">
        {blogs.map((blog, index) => {
          return (
            <Link to={`/blog/${blog.id}`} key={index}>
              <div className="flex my-4 space-x-4 items-center">
                <div className="h-16 w-24">
                  <img
                    src={blog.imgUrl}
                    alt={blog.title}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex flex-col justify-center space-y-1">
                  <p className="text-sm text-grey-601">
                    {blog.category.text.toUpperCase()}
                  </p>
                  <p className="text-xs font-semibold hover:underline">
                    {blog.title}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPosts;
