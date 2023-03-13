import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Home/Footer/Footer';
import { Nav } from './components/Home/navbar/Nav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/blog/Blog';
import { Membership } from './pages/Membership';
import { Projects } from './pages/Projects';
import { Publication } from './pages/Publication';
import { Services } from './pages/Services';
import { Disciplines } from './pages/Disciplines';
import { BackToTop } from './components/Global/BackToTop';
import Application from './pages/application/Application';
import SignUp from './pages/authentication/SignUp';
import Login from './pages/authentication/Login';
import NotFoundPage from './pages/NotFound';
import Author from './pages/blog/Author';
import SingleBlog from './pages/blog/SingleBlog';

export const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/author/:id" element={<Author />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publicaiton" element={<Publication />} />
        <Route path="/services" element={<Services />} />
        <Route path="/disciplines" element={<Disciplines />} />
        <Route path="/application" element={<Application />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
};
