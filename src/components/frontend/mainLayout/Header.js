import React, { Fragment } from "react";
import { FiSearch, FiBell, FiMenu, FiUser } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../../hooks/context";
import { sidebarData } from "../../../data/index";

const Header = ({ show, setShow }) => {
  const history = useHistory();
  const value = useGlobalContext();

  const handleMenubar = (menubar) => {
    // console.log("menubar form header", menubar);
    value.setMenubar(menubar);
    history.push(menubar.link);
  };

  const handleSignOut = () => {
    value.signOut();
    history.push("/");
  };

  return (
    <div className="grid grid-rows-layout grid-cols-1 shadow-lg">
      <div className="grid grid-cols-layout overflow-hidden">
        <div className="pl-5 md:px-5 flex items-center lg:bg-primary">
          <img
            className="w-20 max-w-none md:w-40"
            src="/images/logo.jpeg"
            alt="logo"
          />
        </div>
        <div className="px-10 flex justify-between items-center">
          <FiMenu
            onClick={() => setShow(!show)}
            className="block text-2xl cursor-pointer lg:hidden"
          />
          <div className="hidden md:block">
            <div className="shadow flex rounded-r-md">
              <input
                className="w-full py-2 px-8 outline-none"
                type="text"
                placeholder="Search..."
              />
              <button className="px-3 py-2 bg-primary w-auto rounded-r-md flex justify-end items-center text-white">
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="flex items-center z-50">
            <div className="">
              <Menu as="div">
                <Menu.Button type="button" className="menu-item-btn">
                  <FiBell />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="menu-item right-20">
                    {sidebarData?.map((menubar, index) => (
                      <Menu.Item key={index}>
                        <span
                          className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100"
                          onClick={() => handleMenubar(menubar)}
                        >
                          {menubar?.name}
                        </span>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="ml-3">
              <Menu as="div">
                <Menu.Button type="button" className="menu-item-btn">
                  <FiUser />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="menu-item right-10">
                    <Menu.Item>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        My Profile
                      </span>
                    </Menu.Item>
                    <Menu.Item>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Edit Profile
                      </span>
                    </Menu.Item>
                    <Menu.Item>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Settings
                      </span>
                    </Menu.Item>
                    <Menu.Item>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={handleSignOut}
                      >
                        Logout
                      </span>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
