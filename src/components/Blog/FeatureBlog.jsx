import moment from 'moment';
import { Link } from 'react-router-dom';

const FeatureBlog = ({ blog }) => {
  return (
    <div className="relative md:mb-36">
      <div className="relative">
        <div className="h-[350px] md:h-[550px] overflow-hidden md:rounded-xl">
          <img
            src={blog.imgUrl}
            alt={blog.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute w-full h-full bg-[#00000097] md:bg-[#0000005e] top-0 md:rounded-xl"></div>
      </div>
      <div className="flex flex-col items-start justify-evenly md:bg-white md:w-2/3 lg:w-1/2 rounded-xl p-6 shadow-lg mx-2 md:mx-12 absolute top-0 bottom-0 md:top-auto md:-bottom-20">
        <span className="bg-green text-white text-xs px-2 py-1 rounded">
          {blog.category.text}
        </span>
        <h1 className="text-3xl md:font-semibold my-3 text-white md:text-black sm:leading-[45px] md:leading-[36px]">
          {blog.title}
        </h1>
        <div className="flex items-center space-x-2 text-sm">
          <div>
            <img
              src={blog.author.img}
              alt={blog.author.name}
              className="h-12 w-12 rounded-full"
            />
          </div>
          <Link
            to={`/author/${blog.author.id}`}
            className="font-bold text-slate-200 md:text-slate-500"
          >
            {blog.author.name}
          </Link>
          <span className="text-xs text-slate-400 pl-2 md:pl-4">
            /{moment(blog.createdAt).format('LL')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlog;
