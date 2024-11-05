import React from "react";
import { FaStar, FaWindows, FaCloudDownloadAlt } from "react-icons/fa";
import logo from "../assets/tiktok-icon.png";
import gta from "../assets/gta5.png";
import wonder from '../assets/wonderrobe.jpeg'
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
    <div className="flex w-full mx-auto sm:mx-0 items-center justify-between bg-white p-4 border-l-8 border-[#00856F]">
      <h2 className="text-xl font-semibold">Windows</h2>
      <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-[#00856F] hover:text-white">
        View All
      </button>
    </div>
  );

  const SoftwareItem = ({ software }) => (
    <div className="flex gap-8">
      <div className="flex w-full mt-5 bg-white p-4">
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
    </div>
  );

  const GameItem = ({ game }) => (
    <div className="flex items-center gap-4 mt-4 ">
      <img src={game.icon} alt={game.name} className="w-14 h-14 rounded-md" />
      <div>
        <h3 className="text-[#2B373A] font-semibold">{game.name}</h3>
        <p className="text-[#00856F] text-sm">{game.category}</p>
        <div className="text-xl font-semibold ml-auto">{game.size}</div>
      </div>
    </div>
  );

  const Mac = () => (
    <div className="flex my-9 w-full mx-auto sm:mx-0 items-center justify-between bg-white p-4 border-l-8 border-[#00856F]">
      <h2 className="text-xl font-semibold">MacOs</h2>
      <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-[#00856F] hover:text-white">
        View All
      </button>
    </div>
  );

  const MacItems = ({ Mac }) => (
    <div className="flex gap-8">
      <div className="flex w-full mt-5 bg-white p-4">
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
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex gap-5">
        <div className="w-[70%]">
          <WindowHeader />
          {softwareData.map((software, index) => (
            <SoftwareItem key={index} software={software} />
          ))}
          <Mac />
        </div>

        <div className="h-30 bg-white w-[30%] p-6">
          <div className="top m-6 text-2xl text-[#424242] font-semibold">
            Pc Games
          </div>
          <hr className="mt-3" />
          <div className="mt-4 space-y-4">
            {games.map((game, index) => (
              <GameItem key={index} game={game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareComponent;
