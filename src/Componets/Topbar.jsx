import React from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
const Topbar = () => {
  return (
    <div>
      <>
        <div className="flex items-center justify-between px-[4.8rem] bg-gray-200 py-4  shadow-md">
          <div className="flex items-center space-x-2">
            <div className=" rounded">
              <img src={logo} className="h-9  " alt="" />
            </div>

            <div className="flex items-center border ps-14 border-gray-300 rounded-md bg-white">
              <span className="p-2 bg-[#00856F] text-white text-xl ">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search products here..."
                className="p-2 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            {/* Categories Button */}
            <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              <span>Categories</span>
            </button>
            {/* Add to Chrome Button */}
            <button className="flex items-center space-x-2 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700">
              <img
                src="path/to/chrome-icon.png"
                alt="Chrome"
                className="w-4 h-4"
              />
              <span>Add to chrome</span>
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Topbar;
