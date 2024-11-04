import React from "react";
import { FaStar, FaWindows, FaCloudDownloadAlt } from "react-icons/fa";
import logo from "../assets/tiktok-icon.png";

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
    latest: "latest",
    rep: "Reputation",
    tag: "latest",
  },
  {
    name: "Steinberg",
    description: "Most powerful music creation software package",
    category: "Operating System",
    os: "Windows",
    downloads: 293299,
    rating: 4,
    size: "7.63GB",
    rep: "Reputation",
    icon: logo,
  },
  {
    name: "Microsoft Office 2016 Professional Plus",
    description: "32-bit/64-bit - Direct + Torrent Magnet",
    category: "Office & PDF",
    os: "Windows",
    downloads: 563169,
    rating: 4,
    size: "7.88GB",
    rep: "Reputation",
    icon: logo,
    tag: "latest",
  },
  {
    name: "Macrium Reflect 10.0.8324",
    description: "Workstation / Server / Server Plus Edition + WinPE ISO",
    category: "Backup & Recovery",
    os: "Windows",
    downloads: 94198,
    rating: 4.5,
    rep: "Reputation",
    size: "748MB",
    icon: logo,
  },
  {
    name: "Capcut 5.0.0.1883",
    description: "A simple, efficient video editing platform",
    category: "Video Editors",
    os: "Windows",
    downloads: 322917,
    rating: 4.5,
    rep: "Reputation",
    size: "595MB",
    icon: logo,
  },
];

const SoftwareComponent = () => {
  const RatingStars = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? "text-yellow-400" : "text-gray-300"}
          >
            <FaStar />
          </span>
        ))}
      </div>
    );
  };

  const WindowHeader = () => (
    <div className="flex w-[66%] mx-auto sm:mx-0 items-center justify-between mt-9 mb-9 bg-white p-4 border-l-8 border-[#00856F]">
      <h2 className="text-xl font-semibold">Windows</h2>
      <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-[#00856F] hover:text-white">
        View All
      </button>
    </div>
  );

  const SoftwareItem = ({ software }) => (
    <div className="flex w-[66%] bg-white p-4">
      <div className="mr-3 text-2xl relative">
        <img src={software.icon} className="h-14 w-14 rounded-md" alt="" />
        <div className="bg-[gold] absolute top-0 left-[-25px] rounded-md text-center w-12 h-auto text-[14px] text-white">
          {software.tag && <p>{software.latest}</p>}
        </div>
      </div>
      <div className="flex flex-grow">
        <div>
          <h3 className="text-[#2B373A]">{software.name}</h3>
          <p className="text-[13px]">{software.description}</p>
          <p className="text-[#00856F] text-[12px] font-semibold">
            {software.category}
          </p>
        </div>
      </div>

      <div className="border-s px-5 py-2">
        <div className="flex items-center gap-2">
          <FaWindows className="text-[#02ADEC] text-2xl" /> {software.os}
        </div>
        <div className="flex gap-1 items-center mt-2 text-[13px]">
          <FaCloudDownloadAlt className="text-[#716d6d] items-center" />
          {software.downloads}
        </div>
      </div>

      <div className="border-s px-5 py-2">
        <div className="flex items-center gap-2">{software.rep}</div>
        <div className="flex items-center mt-2 text-[13px]">
          <RatingStars rating={software.rating} />
        </div>
      </div>

      <div className="border-s text-center text-xl font-semibold px-5 py-4">
        {software.size}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <WindowHeader />
      {softwareData.map((software, index) => (
        <SoftwareItem key={index} software={software} />
      ))}
    </div>
  );
};

export default SoftwareComponent;
