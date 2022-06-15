import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { useGetData } from "../../../hooks/dataApi";

SwiperCore.use([Pagination, Autoplay]);

const Partner = () => {
  // const { data: list } = useGetData("partner", "/partner-list");

  const data = [
    {
      id: "1",
      img: "https://res.cloudinary.com/dixltu8gd/image/upload/v1643733713/luspizpmbwjyyrbt2pzz.png",
    },
    {
      id: "2",
      img: "https://res.cloudinary.com/dixltu8gd/image/upload/v1643733705/ycdocycpt7wyj0ylzxzb.png",
    },
    {
      id: "3",
      img: "https://res.cloudinary.com/dixltu8gd/image/upload/v1643733713/luspizpmbwjyyrbt2pzz.png",
    },
    {
      id: "4",
      img: "https://res.cloudinary.com/dixltu8gd/image/upload/v1643733705/ycdocycpt7wyj0ylzxzb.png",
    },
  ];

  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-5 py-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              540: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img className="h-36" src={item.img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
