import React from "react";
import Fade from "react-reveal/Fade";
import { useGetData } from "../../../hooks/dataApi";

const Services = () => {
  // const { data: list } = useGetData("service", "/service-list");
  const data = [
    {
      id: "1",
      title: "Get Expert Help",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://res.cloudinary.com/dixltu8gd/image/upload/v1643000272/opowxmii12y3wez77dlp.png",
    },
    {
      id: "2",
      title: "Launch Your Store",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://res.cloudinary.com/dixltu8gd/image/upload/v1643000272/opowxmii12y3wez77dlp.png",
    },
    {
      id: "3",
      title: "Get Expert Help",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://res.cloudinary.com/dixltu8gd/image/upload/v1643000272/opowxmii12y3wez77dlp.png",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-5 py-20">
      <div className="pb-16">
        <h2 className="text-2xl font-bold text-black sm:mt-4 sm:text-4xl lg:text-3xl text-center px-5">
          Grow Your Brand Awareness Into The Retail World
        </h2>
        <div className="border-b-4 my-6 w-32 m-auto border-darkBlue" />
      </div>
      <Fade left opposite={true} distance={"2rem"} duratrion={600}>
        <div className="py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
          {data.map((item) => (
            <div
              key={item.id}
              className="text-center p-12 border-2 border-solid hover:border-darkBlue hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="break-all">
                <div className="p-3 flex justify-center">
                  <img className="h-28" src={item.img} alt="" />
                </div>
                <h5 className="text-xl font-medium">{item.title}</h5>
                <p className="text-gray-600">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Services;
