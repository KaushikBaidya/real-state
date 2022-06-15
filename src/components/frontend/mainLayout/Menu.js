import React from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../../../data";
import { useGlobalContext } from "../../../hooks/context";

const Menu = () => {
  const value = useGlobalContext();

  return (
    <div className="flex flex-col w-56 items-center h-full overflow-hidden text-gray-400">
      <div className="">
        <div className="flex flex-col items-center">
          {sidebarData.map((item, index) => (
            <Link key={index} className="sidebar-menu-item" to={item.path}>
              <span className="ml-2 text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
        <button
          className="absolute bottom-10"
          type="button"
          onClick={value.signOut}
        >
          <span className="ml-5 text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
