import React from "react";
import { FaStar, FaWindows, FaCloudDownloadAlt } from "react-icons/fa";
import logo from "../assets/tiktok-icon.png";

import gta from "../assets/gta5.png";
import wonder from "../assets/wonderrobe.jpeg";
import { GrApple } from "react-icons/gr";
import { DiAndroid } from "react-icons/di";
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

const MacData = [
  {
    name: "Pixelmator Pro 3.6.12",
    description: "Easy to use image editing",
    category: "GRAPICS DESIGNATIONS",
    os: "Mac",
    downloads: 26982,
    rating: 3,
    size: "892MB",
    icon: wonder,
    latest: "latest",
    rep: "Reputation",
    tag: "latest",
  },
  {
    name: "Steinberg",
    description: "Most powerful music creation software package",
    category: "Operating System",
    os: "Mac",
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
    os: "Mac",
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
    os: "Mac",
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
    os: "Mac",
    downloads: 322917,
    rating: 4.5,
    rep: "Reputation",
    size: "595MB",
    icon: logo,
  },
  {
    name: "GTA V",
    description: "Grand Theft Auto V",
    category: "PC Games",
    os: "Mac",
    downloads: 1234567,
    rating: 4.7,
    size: "74.0GB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
    tag: "latest",
  },
  {
    name: "Fortnite",
    description: "Fortnite",
    category: "PC Games",
    os: "Mac",
    downloads: 1234567,
    rating: 4.7,
    size: "74.0GB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
    tag: "latest",
  },
  {
    name: "Fortnite",
    description: "Fortnite",
    category: "PC Games",
    os: "Mac",
    downloads: 1234567,
    rating: 4.7,
    size: "74.0GB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
    tag: "latest",
  },
];

const games = [
  {
    name: "Supermarket Simulator",
    category: "PC Games",
    size: "1.0GB",
    icon: gta,
  },
  {
    name: "Supermarket Simulator",
    category: "PC Games",
    size: "1.0GB",
    icon: gta,
  },
  {
    name: "Supermarket Simulator",
    category: "PC Games",
    size: "1.0GB",
    icon: gta,
  },
  {
    name: "Supermarket Simulator",
    category: "PC Games",
    size: "1.0GB",
    icon: gta,
  },

  {
    name: "Car Sale Simulator 2023",
    category: "PC Games",
    size: "2.5GB",
    icon: gta,
  },
  {
    name: "Grand Theft Auto GTA 5",
    category: "PC Games",
    size: "54GB",
    icon: gta,
  },
  {
    name: "Lossless Scaling",
    category: "PC Games",
    size: "2.0MB",
    icon: gta,
  },
  {
    name: "BeamNG.drive",
    category: "PC Games",
    size: "23.2GB",
    icon: gta,
  },
  {
    name: "The Long Drive",
    category: "PC Games",
    size: "2.1GB",
    icon: gta,
  },
];

const anriodes = [
  {
    name: "TikTok",
    description: "Download videos and music easier from YouTube",
    category: "Entertainment",
    os: "Android",
    downloads: 1234567,
    rating: 4.7,
    size: "123MB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
    tag: "latest",
  },
  {
    name: "Whattsapp",
    description: "Download videos and music easier from YouTube",
    category: "Entertainment",
    os: "Android",
    downloads: 1234567,
    rating: 4.7,
    size: "123MB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
    tag: "latest",
  },
  {
    name: "Facebook",
    description: "Download videos and music easier from YouTube",
    category: "Entertainment",
    os: "Android",
    downloads: 1234567,
    rating: 4.7,
    size: "123MB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
  },
  {
    name: "Instagram",
    description: "Download videos and music easier from YouTube",
    category: "Entertainment",
    os: "Android",
    downloads: 1234567,
    rating: 4.7,
    size: "123MB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
  },
  {
    name: "Twitter",
    description: "Download videos and music easier from YouTube",
    category: "Entertainment",
    os: "Android",
    downloads: 1234567,
    rating: 4.7,
    size: "123MB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
  },
  {
    name: "YouTube",
    description: "Download videos and music easier from YouTube",
    category: "Entertainment",
    os: "Android",
    downloads: 1234567,
    rating: 4.7,
    size: "123MB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
    tag: "latest",
  },
  {
    name: "Discord",
    description: "Download videos and music easier from YouTube",
    category: "Entertainment",
    os: "Android",
    downloads: 1234567,
    rating: 4.7,
    size: "123MB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
    tag: "latest",
  },
  {
    name: "Snapchat",
    description: "Download videos and music easier from YouTube",
    category: "Entertainment",
    os: "Android",
    downloads: 1234567,
    rating: 4.7,
    size: "123MB",
    icon: gta,
    latest: "latest",
    rep: "Reputation",
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
    <div className="flex w-full shadow mx-auto sm:mt-0 mt-2  items-center justify-between bg-white p-4 border-l-8 border-[#00856F]">
      <h2 className="text-xl font-semibold">Windows</h2>
      <button className="px-3 py-1 text-sm text-gray-600 border  border-gray-300 rounded hover:bg-[#00856F] hover:text-white">
        View All
      </button>
    </div>
  );

  const SoftwareItem = ({ software }) => (
    <div className="flex   sm:flex-row gap-4  sm:gap-8">
      <div className=" sm:flex-row flex flex-col   w-full    mt-4  h-full sm:h-24 shadow bg-white p-4 ">
        <div className="relative flex sm:w-[50%]  w-full   ">
          <img
            src={software.icon}
            className="h-12 sm:h-full w-14  rounded-md"
            alt=""
          />
          {software.tag && (
            <div className="bg-[gold]   absolute top-0 left-[-35px] rounded-md text-center  px-1  text-[14px] text-white py-0">
              {software.latest}
            </div>
          )}

          <div className="flex ms-3 flex-col  sm:flex-row ">
            <div className="w-full">
              <h3 className="text-[#2B373A] truncate w-[75%]    text-lg font-semibold">
                {software.name}
              </h3>
              <p className="text-[13px] h-4 truncate ... w-[70%]  my-1 text-gray-600 ">
                {software.description}
              </p>
              <p className="text-[#00856F] text-[12px] font-semibold ">
                {software.category}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col flex w-ful sm:flex-row sm:w-[50%] ">
          <div className="sm:border-l  flex flex-row sm:flex-col    sm:px-5 w-1/3 ">
            <div className=" ms-2 gap-2  flex  sm:flex-row  py-2 text-[14px]">
              <FaWindows className="text-[#02ADEC] text-xl" />
              <span>{software.os}</span>
            </div>
            <div className="flex  sm:flex-row items-center gap-2 mb-1  text-[13px] text-gray-900 ">
              <FaCloudDownloadAlt className="text-[#716d6d]" />
              {software.downloads}
            </div>
          </div>

          <div className="sm:border-l sm:px-5 py-2 text-center justify-around flex flex-row sm:flex-col sm:text-left w-1/3">
            <div className="flex items-center gap-2">{software.rep}</div>
            <div className="mt-2">
              <RatingStars rating={software.rating} />
            </div>
          </div>

          <div className="sm:border-l px-1 sm:px-8  text-center py-4 text-xl font-semibold text-gray-800 w-1/3">
            {software.size}
          </div>
        </div>
      </div>
    </div>
  );

  const GameItem = ({ game }) => (
    <div className="flex items-center   gap-4 mt-4 ">
      <img src={game.icon} alt={game.name} className="w-14 h-14 rounded-md" />
      <div>
        <h3 className="text-[#2B373A] font-semibold">{game.name}</h3>
        <p className="text-[#00856F] text-sm">{game.category}</p>
        <div className="text-xl font-semibold ml-auto">{game.size}</div>
      </div>
    </div>
  );

  const Mac = () => (
    <div className="flex shadow my-9 w-full mx-auto sm:mx-0 items-center justify-between bg-white p-4 border-l-8 border-[#00856F]">
      <h2 className="text-xl font-semibold">MacOs</h2>
      <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-[#00856F] hover:text-white">
        View All
      </button>
    </div>
  );

  const MacItems = ({ mac }) => (
    <div className="flex   sm:flex-row gap-4  sm:gap-8">
      <div className=" sm:flex-row flex flex-col   w-full    mt-4  h-full sm:h-24 shadow bg-white p-4 ">
        <div className="relative flex sm:w-[50%] w-full ">
          <div className="h-14 w-14 overflow-hidden rounded-md">
            <img src={mac.icon} className="h-full w-full object-cover" alt="" />
          </div>
          {mac.tag && (
            <div className="bg-[gold]  absolute top-0 left-[-35px]  text-center  px-1  text-[14px] text-white py-0">
              {mac.latest}
            </div>
          )}

          <div className="flex   ms-3  flex-col  sm:flex-row ">
            <div className="w-full">
              <h3 className="text-[#2B373A] truncate w-[70%]   text-lg font-semibold">
                {mac.name}
              </h3>
              <p className="text-[13px] h-4 truncate ... w-[50%]   text-gray-600 ">
                {mac.description}
              </p>
              <p className="text-[#00856F] text-[12px] font-semibold ">
                {mac.category}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col flex w-ful sm:flex-row sm:w-[50%]  ">
          <div className="sm:border-l flex flex-row sm:flex-col  justify-around sm:px-5  ">
            <div className="  gap-2 flex  py-2 text-[14px]">
              <GrApple className="text-[#02ADEC] text-xl" />
              <span>{mac.os}</span>
            </div>
            <div className="flex  sm:flex-row items-center gap-2 mb-1  text-[13px] text-gray-900 ">
              <FaCloudDownloadAlt className="text-[#716d6d]" />
              {mac.downloads}
            </div>
          </div>

          <div className="sm:border-l  w-full px-5 sm:px-5 py-2 text-center justify-around flex flex-row sm:flex-col sm:text-left ">
            <div className="flex items-center gap-2">{mac.rep}</div>
            <div className="mt-2">
              <RatingStars rating={mac.rating} />
            </div>
          </div>

          <div className="sm:border-l   text-center w-full py-4 text-xl font-semibold text-gray-800 ">
            {mac.size}
          </div>
        </div>
      </div>
    </div>
  );

  const android = () => {
    return (
      <div className="shadow flex my-9 w-full mx-auto sm:mx-0 items-center justify-between bg-white p-4 border-l-8 border-[#00856F]">
        <h2 className="text-xl font-semibold">Android</h2>
        <button className="px-3 py-1 text-sm bottom-4 text-gray-600 border border-gray-300 rounded hover:bg-[#00856F] hover:text-white">
          View All
        </button>
      </div>
    );
  };

  const AndroidItems = ({ android }) => (
    <div className="flex   sm:flex-row gap-4  sm:gap-8">
      <div className=" sm:flex-row flex flex-col   w-full    mt-4  h-full sm:h-24 shadow bg-white p-4 ">
        <div className="relative flex sm:w-[50%]  w-full   ">
          <img
            src={android.icon}
            className="h-12 sm:h-full w-16   rounded-md"
            alt=""
          />
          {android.tag && (
            <div className="bg-[gold]  absolute top-0 left-[-35px] rounded-md text-center  px-1  text-[14px] text-white py-0">
              {android.latest}
            </div>
          )}

          <div className="flex   ms-3  flex-col  sm:flex-row ">
            <div className="w-full">
              <h3 className="text-[#2B373A] truncate ... w-[70%] sm:truncate ...w-96   text-lg font-semibold">
                {android.name}
              </h3>
              <p className="text-[13px] h-4 truncate ... w-[50%]   text-gray-600 ">
                {android.description}
              </p>
              <p className="text-[#00856F] text-[12px] font-semibold ">
                {android.category}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col flex w-ful sm:flex-row sm:w-[50%]  ">
          <div className="sm:border-l flex flex-row sm:flex-col  justify-around sm:px-5  ">
            <div className=" ms-2 gap-2 flex  py-2 text-[14px]">
              <FaWindows className="text-[#02ADEC] text-xl" />
              <span>{android.os}</span>
            </div>
            <div className="flex  sm:flex-row items-center gap-2 mb-1  text-[13px] text-gray-900 ">
              <FaCloudDownloadAlt className="text-[#716d6d]" />
              {android.downloads}
            </div>
          </div>

          <div className="sm:border-l sm:px-5 py-2 text-center justify-around flex flex-row sm:flex-col sm:text-left ">
            <div className="flex items-center gap-2">{android.rep}</div>
            <div className="mt-2">
              <RatingStars rating={android.rating} />
            </div>
          </div>

          <div className="sm:border-l px-1 sm:px-8  text-center py-4 text-xl font-semibold text-gray-800 ">
            {android.size}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 space-y-4 mb-14 sm:mb-40">
      <div className="flex flex-col lg:flex-row  gap-5">
        <div className="w-full lg:w-2/3 ">
          <WindowHeader />

          <div className="space-y-4">
            {softwareData.map((software, index) => (
              <SoftwareItem key={index} software={software} />
            ))}
          </div>

          <div className="space-y-4">
            <Mac />
            {MacData.map((mac, index) => (
              <MacItems key={index} mac={mac} />
            ))}
          </div>

          <div className="space-y-4">
            {android()}
            {anriodes.map((android, index) => (
              <AndroidItems key={index} android={android} />
            ))}
          </div>
        </div>

        <div className="w-[100%] lg:w-[30%] mt-0 lg:sm:9">
          <div className="sticky top-8 rounded-lg shadow bg-white p-6">
            <div className="text-2xl text-[#424242] font-semibold mb-6">
              Pc Games
            </div>
            <hr className="mb-4" />
            <div className="space-y-4">
              {games.map((game, index) => (
                <GameItem key={index} game={game} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareComponent;
