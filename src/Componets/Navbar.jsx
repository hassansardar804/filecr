import React from "react";
import { FaWindows, FaApple, FaAndroid } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { BiSolidJoystick } from "react-icons/bi";
import { FaBookBookmark } from "react-icons/fa6";
import { TbPhotoVideo } from "react-icons/tb";
import crown from "../assets/crown.svg";
const Navbar = () => {
  const navItems = [
    { icon: FaWindows, label: "Windows" },
    { icon: FaApple, label: "Mac" },
    { icon: AiFillAndroid, label: "Android Apps" },
    { icon: AiFillAndroid, label: "Android Games" },
    { icon: BiSolidJoystick, label: "PC Games" },
    { icon: FaBookBookmark, label: "Ebooks", crown: true },
    { icon: TbPhotoVideo, label: "Video Course", crown: true },
  ];

  return (
    <nav className="flex mb-8 border-b border-gray-200">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`flex border items-center px-8 py-6 text-sm text-gray-700 hover:bg-[#00856F] hover:text-white focus:outline-none transition-all duration-500 ${
            index === 0 ? "ml-5" : ""
          }`}
        >
          <item.icon className="w-5 h-5 mr-2 " />
          {item.label}
          {item.crown && (
            <img src={crown} alt="Crown" className="w-5 h-5 ml-2  " />
          )}{" "}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
