import React from "react";
import { FiMenu, FiSearch, FiChrome } from "react-icons/fi";
import { TbCategoryFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.png";

const TopBar = () => {
  return (
    <div>
      <div className="flex items-center px-8 py-3  justify-between bg-white p-2 shadow-sm">
        <div className="flex items-center gap-7">
          <div className=" p-2 rounded">
            {/* <logo className="w-6 h-6 text-white" /> */}
            <img src={logo} className="h-8 w-8" alt="" />
          </div>
          <div className="relative  flex-gro max-w-2xl rounded-md">
            <button className="absolute left-0 w-10 flex justify-center  h-full  top-1/2 transform -translate-y-1/2 bg-[#00856F] text-white rounded-l  pt-2.5">
              <FiSearch className="w-4 h-4" />
            </button>
            <input
              type="text"
              placeholder="Search products here..."
              className="w-[470px] pl-4 ps-12 pr-12 text-sm py-2 border border-gray-300 bg-[#F9F9F9]  rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center space-x-4">
          <button className="flex items-center gap-3 text-gray-700">
            <TbCategoryFilled className="w-5 h-5" />
            <span>Categories</span>
          </button>
          <button className="flex items-center space-x-1 bg-[#2B373A]  text-white px-3  rounded-md py-2">
            <FcGoogle className="h-5 w-5" />
            <span>Add to chrome</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
