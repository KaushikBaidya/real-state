import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import OurTeam from "../components/OurTeam";
import Partner from "../components/Partner";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Landing = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Projects />
      <Gallery />
      <OurTeam />
      <Testimonials />
      <Partner />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Landing;
