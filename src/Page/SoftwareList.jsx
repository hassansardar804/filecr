import React from "react";
import {
  FaStar,
  FaStarHalf,
  FaWindows,
  FaCloudDownloadAlt,
  FaCrown,
} from "react-icons/fa";

const softwareData = [
  {
    name: "Skylum Luminar Neo 1.21.1.13959",
    description: "Creative image editor to bring your ideas to life",
    category: "Graphics & Design",
    os: "Windows",
    downloads: 134317,
    rating: 4,
    size: "3.0GB",
    icon: "https://example.com/skylum-icon.png",
    preActivated: false,
  },
  {
    name: "Microsoft Office 2021 Professional Plus",
    description: "32-bit/64-bit - Direct + Torrent Magnet",
    category: "Office & PDF",
    os: "Windows",
    downloads: 1331388,
    rating: 4,
    size: "5.93GB",
    icon: "https://example.com/office-2021-icon.png",
    preActivated: false,
  },
  {
    name: "Windows 11 Pro with MS Office 2021 Pro Plus",
    description: "22H2 (No TPM) Multilingual Preactivated ISO",
    category: "Operating System",
    os: "Windows",
    downloads: 293299,
    rating: 4,
    size: "7.63GB",
    icon: "https://example.com/windows-11-icon.png",
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
    icon: "https://example.com/office-2016-icon.png",
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
    icon: "https://example.com/macrium-icon.png",
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
  <div className="flex items-center bg-white p-4 rounded-lg shadow">
    <img src={software.icon} alt={software.name} className="w-12 h-12 mr-4" />
    <div className="flex-grow">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{software.name}</h2>
        <span className="text-gray-600 font-bold">{software.size}</span>
      </div>
      <p className="text-sm text-gray-600">{software.description}</p>
      <div className="flex items-center text-sm text-gray-500 mt-1">
        {`${software.category} `}
        <FaWindows className="inline mr-1" /> {software.os} 
        <FaCloudDownloadAlt className="inline mr-1" /> {software.downloads.toLocaleString()}
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
