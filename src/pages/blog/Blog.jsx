import Blogs from '../../components/Blog/Blogs';
import Categories from '../../components/Blog/Categories';
import FeatureBlog from '../../components/Blog/FeatureBlog';
import { blogs } from './data/blogs';
import { useState } from 'react';

export const Blog = () => {
  const firstBlog = blogs[0];
  const [currentCategory, setCurrentCategory] = useState();
  return (
    <div className="md:p-8 md:px-16">
      <FeatureBlog blog={firstBlog} />
      <h1 className="text-xl font-semibold my-4 mx-4 md:mx-0">
        Other posts
      </h1>
      <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-10">
        <Blogs
          blogs={
            !currentCategory
              ? blogs
              : blogs.filter(
                  blog => blog.category.id === currentCategory,
                )
          }
        />
        <Categories
          onClick={id => setCurrentCategory(id)}
          active={currentCategory}
        />
      </div>
    </div>
  );
};
