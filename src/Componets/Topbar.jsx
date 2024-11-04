import React, { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { TbCategoryFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.svg";
import crown from "../assets/crown.svg";
import Navbar from "./Navbar";

const TopBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex items-center px-4 py-2 justify-between bg-white shadow-sm md:px-8 md:py-3">
        <div className="flex items-center gap-3 md:gap-7">
          <div className="p-2 rounded">
            <img
              src={logo}
              className="h-8 w-8 bg-[#00856F] px-1 py-1.5 rounded-md md:h-9 md:w-9 md:py-2"
              alt="Logo"
            />
          </div>
          <div className="relative flex-grow max-w-xs md:max-w-2xl rounded-md">
            <button className="absolute left-0 w-8 h-full flex justify-center top-1/2 transform -translate-y-1/2 bg-[#00856F] text-white rounded-l md:w-10 pt-2 md:pt-2.5">
              <FiSearch className="w-4 h-4" />
            </button>
            <input
              type="text"
              placeholder="Search products here..."
              className="w-full max-w-xs sm:max-w-sm md:w-[470px] pl-3 ps-10 pr-12 text-sm py-2 border border-gray-300 bg-[#F9F9F9] rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 md:pl-4 md:ps-12"
            />
          </div>
        </div>

        <div className="hidden md:flex gap-3 items-center space-x-2 sm:space-x-4">
          <button className="flex items-center gap-1 md:gap-3 text-gray-700">
            <TbCategoryFilled className="w-4 h-4 md:w-5 md:h-5" />
            <span>Categories</span>
          </button>
          <div className="relative inline-block">
            <button
              className={`flex items-center space-x-1 bg-[#2B373A] text-white px-2 rounded-xl py-2 sm:py-[10px] sm:px-3 md:rounded-2xl ${
                isHovered ? "bg-[#1B272A]" : ""
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={crown}
                className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2"
                alt=""
              />
              <span className="text-sm md:text-base">Premium</span>
            </button>
          </div>
        </div>

        <button
          className="flex md:hidden items-center text-gray-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoMdClose className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <Navbar isOpen={isMenuOpen} />
      )}
    </div>
  );
};

export default TopBar;
