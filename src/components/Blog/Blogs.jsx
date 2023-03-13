import moment from 'moment';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

const Blogs = ({ blogs, cols }) => {
  const pageSize = 6;
  const [paginated, setPaginated] = useState([]);
  const [indexes, setIndexes] = useState({
    start: 0,
    end: blogs.length > pageSize ? pageSize : blogs.length - 1,
  });

  useEffect(() => {
    setPaginated(blogs.slice(indexes.start, indexes.end));
  }, [indexes, blogs]);

  return (
    <div className="w-full">
      <div
        className={`grid md:${
          cols ? 'grid-cols-3' : 'grid-cols-2'
        } w-full px-4 md:px-0 gap-8 gap-y-7`}
      >
        {paginated.map((blog, index) => {
          return (
            <div
              key={index}
              className="border rounded-md p-2 md:px-3"
            >
              <div className="mb-3 h-48">
                <img
                  src={blog.imgUrl}
                  alt={blog.title}
                  className="rounded object-cover h-full w-full"
                />
              </div>
              <span className="bg-green text-white text-xs px-2 py-1 rounded">
                {blog.category.text}
              </span>
              <h1 className="my-2">
                <Link
                  to={`/blog/${blog.id}`}
                  className="md:text-xl font-semibold hover:text-slate-600"
                >
                  {blog.title}
                </Link>
              </h1>

              <div className="flex md:items-center text-sm flex-col space-y-2 md:space-y-0 md:flex-row">
                <div className="flex space-x-2 items-center">
                  <img
                    src={blog.author.img}
                    alt={blog.author.name}
                    className="h-9 w-9 md:h-10 md:w-10 rounded-full"
                  />
                  <div className="flex flex-col md:flex-row md:items-center justify-start">
                    <Link
                      to={`/blog/author/${blog.author.id}`}
                      className="text-slate-400"
                    >
                      {blog.author.name}
                    </Link>

                    <span className="text-[12px] font-light md:font-normal md:text-xs text-slate-400 md:pl-4 flex">
                      <span className="hidden md:block">/</span>
                      {moment(blog.createdAt).format('LL')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        onNext={() => {
          const start = indexes.end;
          let end = start + pageSize;
          if (end + 1 > blogs.length) {
            end = blogs.length;
          }
          setIndexes({ start, end });
        }}
        activePage={Math.floor(indexes.start / pageSize) + 1}
        isLast={paginated.length < pageSize}
        onPrev={() => {
          const end = indexes.start;
          const start = end - pageSize;
          if (start < 0) start = 0;
          setIndexes({ start, end });
        }}
      />
    </div>
  );
};

export default Blogs;
