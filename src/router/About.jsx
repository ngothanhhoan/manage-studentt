/** @format */

import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const Student = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='Student.' text='Student Schema.' />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default Student;
