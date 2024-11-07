import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const footerSections = [
    {
      title: "Download Software",
      links: ["Windows", "Mac", "Android APK"],
    },
    {
      title: "Support Center",
      links: ["FAQs", "Contact Us", "Software Submission", "Software Request"],
    },
    {
      title: "Company Info",
      links: ["About"],
    },
    {
      title: "Partners",
      links: ["Anygame", "APKhub"],
      withIcon: true,
    },
    {
      title: "Download OS",
      links: ["Windows 11", "Windows 10", "Windows 8", "Windows 7"],
    },
    {
      title: "Common Issues",
      links: ["Ad Blocker", "How To Download", "Zip Password"],
    },
  ];

  const policyLinks = ["Terms", "Cookies Policy", "Privacy Policy"];

  return (
    <footer className="bg-[#1E2024]  relative h-[37rem]  text-[#D9D9D9] text-sm pt-8 ">
      <div className="mx-auto bg-[#1E2024] flex pt-10  max-w-6xl flex-wrap gap-8">
        {footerSections.map((section, index) => (
          <div key={index} className="w-full sm:w-[45%] lg:w-[22%] mb-4">
            <h3 className="text-white font-semibold mb-2">{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-1">
                  <a href="#" className="flex items-center hover:text-white">
                    {link}
                    {section.withIcon && <FiArrowUpRight className="ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex px-11 py-9 bg-[#1E2024]   gap-4">
        {policyLinks.map((policy, index) => (
          <a key={index} href="#" className="hover:text-white">
            {policy}
          </a>
        ))}
      </div>

      <div className="mx-auto absolute bottom-0 w-full   py-4  flex     px-14 bg-[#21282A]   border-gray-700 ">
        <p className="text-sm  ">©FileCR - All Rights Reserved 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
