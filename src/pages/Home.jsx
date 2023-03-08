import React from "react";
import { About } from "../components/Home/About";
import { Nav } from "../components/Home/navbar/Nav";
import { Services } from "../components/Home/services/Services";
import { Header } from "../components/Home/navbar/Header";

export const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Services />
      <About />
    </div>
  );
};
