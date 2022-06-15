import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import MobileSidebar from "../mainLayout/MobileSidebar";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="/"
            >
              <img className="h-16" src="/images/logo.jpeg" alt="logo" />
            </a>
            <div className="flex gap-x-2 items-center">
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <HiMenuAlt3 />
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link className="nav-item" to="/">
                Home
              </Link>
              <Link className="nav-item" to="/about">
                About
              </Link>
              <Link className="nav-item" to="/whyus">
                Why us
              </Link>
              <Link className="nav-item" to="/services">
                Services
              </Link>
              <Link className="nav-item" to="Project">
                Projects
              </Link>
              <Link className="nav-item" to="/list">
                List
              </Link>
              <Link className="nav-item" to="/media">
                Media
              </Link>
              <Link className="nav-item" to="/career">
                Career
              </Link>
              <Link className="nav-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
