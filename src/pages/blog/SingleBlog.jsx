import { useRef, useEffect } from 'react';
import { blogs } from './data/blogs';
import moment from 'moment';
import { Link } from 'react-router-dom';
import RelatedPosts from '../../components/Blog/RelatedPosts';

const SingleBlog = () => {
  const blog = blogs[0];
  const ref = useRef(null);

  useEffect(() => {
    if (ref != null) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [ref]);

  return (
    <div className="md:p-12 p-5 md:pt-8">
      <span className="bg-green text-white text-xs px-2 py-1 rounded">
        {blog.category.text}
      </span>
      <h1 className="my-3 text-xl md:text-3xl font-bold hover:text-slate-600">
        {blog.title}
      </h1>

      <div className="flex md:items-center text-sm flex-col space-y-2 md:space-y-0 md:flex-row">
        <div className="flex space-x-2 items-center">
          <img
            src={blog.author.img}
            alt={blog.author.name}
            className="h-8 w-8 md:h-10 md:w-10 rounded-full"
          />
          <Link
            to={`/blog/author/${blog.author.id}`}
            className="text-slate-400 font-bold"
          >
            {blog.author.name}
          </Link>
        </div>

        <span className="text-xs text-slate-400 pl-2 md:pl-4">
          /{moment(blog.createdAt).format('LL')}
        </span>
      </div>
      <div className="flex mt-8 md:space-x-6 items-start flex-col space-y-4 md:space-y-0 md:flex-row">
        <div className="w-full">
          <div className="md:h-96 w-full mb-4">
            <img
              src={blog.imgUrl}
              alt={blog.title}
              className="rounded-md object-cover h-full w-full"
            />
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Possimus adipisci inventore voluptates placeat libero
            tempora optio error, architecto pariatur cum a aut quod
            dignissimos sit minus ipsam facere totam rem. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Reiciendis
            ipsam itaque perferendis natus a fugit. Fuga eveniet unde
            impedit nobis necessitatibus ducimus temporibus dolore
            animi magni aspernatur. Molestiae, maxime illo!
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <RelatedPosts blogs={blogs} title="Related posts" />
          <RelatedPosts blogs={blogs} title="Other posts" />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
