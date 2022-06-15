import React from "react";
import Slide from "react-reveal/Slide";
import { useGetData } from "../../../hooks/dataApi";

const Testimonials = () => {
  // const { data: list } = useGetData("testimonials", "/testimonials-list");

  const data = [
    {
      id: "1",
      name: "MARIA",
      title: "CEO",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://cutt.ly/zJBP4BO",
    },
    {
      id: "2",
      name: "JHON",
      title: "CTO",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://cutt.ly/pJBAhfs",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <div className="pb-8">
        <h2 className="text-2xl font-bold text-black sm:mt-4 sm:text-4xl lg:text-3xl text-center px-5">
          Testimonials
        </h2>
        <div className="border-b-4 my-6 w-32 m-auto border-darkBlue" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 cursor-pointer">
        {data.map((item) => (
          <Slide left opposite={true} distance={"2rem"} duratrion={600}>
            <div key={item.id} className="md:flex md:flex-wrap md:-mx-4">
              <div className="md:full md:p-4 mt-6 md:mt-0">
                <div className="p-6 border-2 border-solid flex hover:border-darkBlue hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="break-all">
                    <p className="text-gray-600">{item.details}</p>
                    <div className="text-gray-900 font-bold uppercase mt-6">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="text-gray-600">
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
