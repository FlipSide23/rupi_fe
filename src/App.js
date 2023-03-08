import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Membership } from './pages/Membership'
import { Projects } from './pages/Projects'
import { Publication } from './pages/Publication'
import { Services } from './pages/Services'
import { Disciplines } from './pages/Disciplines'

export const App = () => {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publicaiton" element={<Publication />} />
          <Route path="/services" element={<Services />} />
          <Route path="/disciplines" element={<Disciplines />} />
        </Routes>
    </div>
  )
}