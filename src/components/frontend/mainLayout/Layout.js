import React from "react";
import Header from "../../frontend/components/Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen text-white overflow-hidden">
      <div className="grid lg:grid-cols-layout w-full h-screen max-w-screen-3xl mx-auto">
        <div className="hidden pt-20 mt-1.5 lg:block">
          <Sidebar />
        </div>
        <div className="grid grid-rows-twoRows w-full h-screen overflow-hidden bg-light text-dark">
          <Header />
          <div className="overflow-y-auto">
            <div className="grid grid-cols-1 p-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
