import React from "react";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-5">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="/"
            >
              <img className="h-24" src="images/logo.jpeg" alt="logo" />
            </a>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-6">Quick Links</h5>
            <div className="mb-2">
              <a href="/" className="">
                About Us
              </a>
            </div>
            <div className="mb-2">
              <a href="/" className="">
                Properties
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-6">Contact Us</h5>
            <div>
              <a
                className="inline-flex space-x-2 items-center"
                href="tel:+8801324244720"
              >
                <FaPhoneAlt />
                <span>01324244720</span>
              </a>
            </div>
            <div>
              <a
                className="inline-flex space-x-2 items-center"
                href="tel:+8801324244721"
              >
                <FaPhoneAlt />
                <span>01324244721</span>
              </a>
            </div>
            <div>
              <a
                href="mailto:info@orangegroup.life"
                className="inline-flex space-x-2 items-center"
              >
                <FaEnvelope />
                <span>info@orangegroup.life</span>
              </a>
            </div>
            <div>
              <a
                href="mailto:a.salam@orangegroup.life"
                className="inline-flex space-x-2 items-center"
              >
                <FaEnvelope />
                <span>a.salam@orangegroup.life</span>
              </a>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <FaMapMarkerAlt className="text-xl" />
              <div className="flex flex-col">
                House #08 ( 1st Floor ), Road # 01, Nikunjo-02, Khilkhet,
                Dhaka-1229, Bangladesh.
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-2 my-2 w-full m-auto border-darkBlue" />
        <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <div className="">
            <h3>
              Copyright © {new Date().getFullYear()} Reserved by Orange
              Properties Limited Developed By
              <a
                className="text-darkBlue font-medium pl-1"
                href="https://chimbukit.com/"
              >
                Chimbuk IT
              </a>
            </h3>
          </div>
          <div className="flex justify-center pb-5">
            <a
              href="https://www.facebook.com/Orangepropertieslimited"
              target="_blank"
              className="w-8 h-8 border-2 border-gray-400 rounded-full flex justify-center py-1 text-gray-600 hover:text-white hover:bg-darkBlue hover:border-gray-100"
            >
              <FiFacebook />
            </a>
            <a
              href="https://www.youtube.com/channel/UCywae7wnu9lN5TXQRVMdopA"
              target="_blank"
              className="w-8 h-8 border-2 border-gray-400 rounded-full text-center flex justify-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-darkBlue hover:border-gray-100"
            >
              <FiYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/orange-properties-limited-286827202"
              target="_blank"
              className="w-8 h-8 border-2 border-gray-400 rounded-full text-center flex justify-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-darkBlue hover:border-gray-100"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
