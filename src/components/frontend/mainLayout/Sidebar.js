import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen overflow-hidden bg-dark">
      <div className="overflow-y-auto">
        <div className="grid grid-cols-1 place-items-center p-2">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
