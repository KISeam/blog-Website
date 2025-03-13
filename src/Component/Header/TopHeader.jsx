import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500  to-[#ec5c82] sticky top-0">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between items-center py-1">
          <div className="flex gap-4">
            <IoLogoMedium className="text-lg" />
            <FaXTwitter className="text-lg" />
            <FaInstagram className="text-lg" />
            <BiLogoTelegram className="text-lg" />
          </div>
          <div className="flex gap-4">
            <p>About Us</p>-<p>Our Story</p>-<p>Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
