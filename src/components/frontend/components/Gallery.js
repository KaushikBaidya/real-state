import React from "react";
import Fade from "react-reveal/Fade";
// import { useGetData } from "../../../hooks/dataApi";

const Gallery = () => {
  // const { data: list } = useGetData("gallery", "/gallery-list");

  const data = [
    {
      id: "1",
      title: "UK",
      img: "https://cutt.ly/mJBOo10",
    },
    {
      id: "2",
      title: "USA",
      img: "https://cutt.ly/rJBPEgc",
    },
    {
      id: "3",
      title: "DUBAI",
      img: "https://cutt.ly/GJBPIGG",
    },
  ];

  return (
    <>
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-16">
          <div className="pb-8">
            <h2 className="text-2xl font-bold text-black sm:mt-4 sm:text-4xl lg:text-3xl text-center px-5">
              Explore Our Gallery
            </h2>
            <div className="border-b-4 my-6 w-32 m-auto border-darkBlue" />
          </div>
          <Fade bottom opposite={true} distance={"2rem"} duratrion={600}>
            <div className="py-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="transform hover:scale-95 duration-300"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full object-cover object-center rounded-lg shadow-md"
                  />

                  <div className="relative px-7 -mt-10">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h4 className="mt-1 text-xl font-medium uppercase leading-tight truncate">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Gallery;
