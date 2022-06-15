import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Flip from "react-reveal/Flip";
// import { useGetData } from "../../../hooks/dataApi";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Banner = () => {
  // const { data: list } = useGetData("banner", "/banner-list");

  const data = [
    {
      id: "0",
      title1: "Welcome to Orange Properties Ltd. (Orange)!",
      title2: "Commitment – Quality- Service",
      details:
        "Orange Properties Ltd. (Orange) wants to be a global reliable brand as a point of reference in everything related to Real Estate in cost effective manner while maintaining the highest level of service. We are offering property, land, and apartment’s buy-sell-rent services in affordable price. We believe and practice customer centric approach.",
      img: "https://cutt.ly/mJBOo10",
    },
  ];
  return (
    <>
      <Swiper
        speed={600}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="mySwiper lg:h-screen md:h-96 sm:h-auto"
      >
        {data.map((item) => (
          <SwiperSlide
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)), url(${item.img})`,
            }}
            className="bg-center bg-cover flex items-center px-16  py-12"
            key={item.id}
          >
            <div className="max-w-7xl">
              <Flip left cascade>
                <h1 className="text-3xl lg:text-5xl  text-white">
                  {item.title1}
                </h1>

                <p className="text-xl lg:text-2xl  text-white pt-1">
                  {item.title2}
                </p>

                <p className="text-base lg:text-lg  text-white py-5">
                  {item.details}
                </p>
              </Flip>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
