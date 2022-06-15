import React from "react";
import Header from "./Header";
// import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";

const WhyUs = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="pb-8">
          <h2 className="text-2xl font-bold text-black sm:mt-4 sm:text-4xl lg:text-3xl text-center px-5">
            Why Choose Us
          </h2>
          <div className="border-b-4 my-6 w-32 m-auto border-darkBlue" />
        </div>
        <div>
          <Fade bottom opposite={true} distance={"2rem"} duratrion={600}></Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhyUs;
