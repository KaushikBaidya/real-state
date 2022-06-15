import React from "react";
import Fade from "react-reveal/Fade";
import { useGetData } from "../../../hooks/dataApi";

const Projects = () => {
  // const { data: list } = useGetData("properties", "/properties-list");

  const data = [
    {
      id: "1",
      title: `"Bougainvillea" by OPL`,
      details:
        "জমির পরিমান ৬ কাঠা, দক্ষিণ মুখি, শেয়ার সংখ্যাঃ ৯ টি, বিল্ডিং টাইপ : জি + ৯ = ১০ তলা ভবন, পার্কিং সংখ্যা: ৯ টি, প্রতি ফ্লোরে ১টি করে ইউনিট, প্রতি ইউনিট : ২৬০০ বর্গফুট (কমন এরিয়া সহ), প্রতি ইউনিটে থাকছে : ৪ বেড, ৪ বাথ , ৪ বারান্দা , ড্রয়িং ও ডাইনিং ও কিচেন, ১ টি লিফট ১ টি সিড়ি।",
      img: "/images/project1.jpg",
    },
    {
      id: "2",
      title: `"Lake House" by Orange Properties`,
      details:
        "সুন্ধরা আবাসিক এলাকা ব্লক – আই এক্সটেনশান , ডেসকো সাব স্টেশনের দক্ষিন পশ্চিম পাশে, জমির পরিমান ৫ কাঠা, লেক ভিউ, সামনে ২৫ ফুট রোড শেয়ার সংখ্যাঃ ৯ টি। বিল্ডিং টাইপ : জি + ৯ (১০ তলা) ভবন। পার্কিং সংখ্যা: ৯ টি + ২ অতিথি পার্কি প্রতি ফ্লোরে ১টি করে ইউনিট। প্রতি ইউনিট : ২৪৫০ বর্গফুট (কমন এরিয়া সহ), প্রতি ইউনিটে থাকছে : ৪ বেড, ৪ বাথ , ৪ বারান্দা , ড্রয়িং ও ডাইনিং, লিভিং রুম, স্টোর রুম ও কিচেন, ২ টি লিফট, ১ টি সিড়ি।",
      img: "/images/project2.jpg",
    },
    {
      id: "3",
      title: `"Tulip" by OPL`,
      details: `At Bashundhara "I-Extension", Road - 102,Khata- 9, No of land share,Apartments - 18, Land share left- 6, Size - 2100 sq ft +/-`,
      img: "/images/project3.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 py-20">
      <div className="pb-8">
        <h2 className="text-2xl font-bold text-black sm:mt-4 sm:text-4xl lg:text-3xl text-center px-5">
          Projects
        </h2>
        <div className="border-b-4 my-6 w-32 m-auto border-darkBlue" />
      </div>
      <Fade bottom opposite={true} distance={"2rem"} duratrion={600}>
        <div className="py-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="rounded overflow-hidden bg-white shadow-lg transform duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <img className="w-full" src={item.img} alt="" />
              <div className="px-6 py-4 break-all">
                <div className="font-bold text-xl mb-2 text-black">
                  <h3>{item.title}</h3>
                </div>
                <p className="text-black text-base">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
