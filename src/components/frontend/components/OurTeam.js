import React from "react";
import Fade from "react-reveal/Fade";
import { useGetData } from "../../../hooks/dataApi";

const OurTeam = () => {
  // const { data: list } = useGetData("ourTeam", "/ourTeam-list");

  const data = [
    {
      id: "1",
      title: "MARIA",
      details: "CEO",
      img: "https://cutt.ly/zJBP4BO",
    },
    {
      id: "2",
      title: "JHON",
      details: "CTO",
      img: "https://cutt.ly/pJBAhfs",
    },
    {
      id: "3",
      title: "LINKON",
      details: "Product Manger",
      img: "https://cutt.ly/CJBAm1X",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <div className="pb-8">
        <h2 className="text-2xl font-bold text-black sm:mt-4 sm:text-4xl lg:text-3xl text-center px-5">
          Our Team
        </h2>
        <div className="border-b-4 my-6 w-32 m-auto border-darkBlue" />
      </div>

      <div className="py-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        <Fade bottom opposite={true} distance={"2rem"} duratrion={600}>
          {data.map((item) => (
            <div
              key={item.id}
              className="p-8 shadow rounded-lg transform hover:scale-105 hover:bg-gray-100 duration-300"
            >
              <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                <img
                  src={item.img}
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center break-all">
                <div className="font-bold text-darkBlue md:text-lg">
                  {item.title}
                </div>
                <p className="text-sm text-gray-500 md:text-base md:mb-4">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default OurTeam;
