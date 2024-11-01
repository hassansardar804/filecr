import React from "react";
import {
  FaStar,
  FaStarHalf,
  FaWindows,
  FaCloudDownloadAlt,
  FaCrown,
} from "react-icons/fa";
import logo from "../../src/assets/logo.svg";

const softwareData = [
  {
    name: "Autodesk",
    description: "Built for Building Information Modeling",
    category: "Office & PDF",
    os: "Windows",
    downloads: 1331388,
    rating: 4,
    size: "5.93GB",
    icon: logo,
    preActivated: false,
  },
  {
    name: "Steinberg",
    description: "Most powerful music creation software package",
    category: "Operating System",
    os: "Windows",
    downloads: 293299,
    rating: 4,
    size: "7.63GB",
    icon: logo,
    preActivated: true,
  },
  {
    name: "Microsoft Office 2016 Professional Plus",
    description: "32-bit/64-bit - Direct + Torrent Magnet",
    category: "Office & PDF",
    os: "Windows",
    downloads: 563169,
    rating: 4,
    size: "7.88GB",
    icon: logo,
    preActivated: false,
  },
  {
    name: "Macrium Reflect 10.0.8324",
    description: "Workstation / Server / Server Plus Edition + WinPE ISO",
    category: "Backup & Recovery",
    os: "Windows",
    downloads: 94198,
    rating: 4.5,
    size: "748MB",
    icon: logo,
    preActivated: false,
  },
];

const WindowHeader = () => (
  <div className="flex w-[50rem] items-center justify-between bg-white p-4 border-l-8 border-[#00856F]">
    <h2 className="text-xl font-semibold">Windows</h2>
    <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-[#00856F] hover:text-white">
      View All
    </button>
  </div>
);

const RatingStars = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <span key={index}>
        {index < Math.floor(rating) ? (
          <FaStar className="text-yellow-400" />
        ) : index === Math.floor(rating) && rating % 1 ? (
          <FaStarHalf className="text-yellow-400" />
        ) : (
          <FaStar className="text-gray-300" />
        )}
      </span>
    ))}
  </div>
);

const SoftwareItem = ({ software }) => (
  <div className="flex w-[50rem] bg-white p-4">
    <div className="mr-3 text-2 xl">
      <img
        src={software.icon}
        className="h-14 w-14 rounded-md bg-green-300"
        alt={software.name}
      />
    </div>
    <div className="flex-grow flex ">
      <div className="">
        <h2 className="text-md font-semibold">{software.name}</h2>
        <p className="text-sm text-gray-600">{software.description}</p>
        <div className="flex items-center text-sm text-[#00856F] mt-1">
          {software.category}
        </div>
      </div>
      <div className="flex mt-2 h-14 ">
        <div className=" border-s-2   ms-20">
          <FaWindows className="inline mt-4 mr-1  " /> {software.os}
          <FaCloudDownloadAlt className="inline ml-2 mt-4  mr-1" />
          {software.downloads.toLocaleString()}
        </div>
      </div>
    </div>
    <div className="flex flex-col items-end ml-4">
      <RatingStars rating={software.rating} />
      {software.preActivated && (
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mt-1 flex items-center">
          <FaCrown className="mr-1" /> Pre-Activated
        </span>
      )}
    </div>
  </div>
);

const SoftwareList = () => (
  <div className="space-y-4">
    <WindowHeader />
    {softwareData.map((software, index) => (
      <SoftwareItem key={index} software={software} />
    ))}
  </div>
);

export default SoftwareList;
