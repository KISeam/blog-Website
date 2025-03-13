import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { IoMenuSharp, IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between items-center py-6">
          <div>
            <img className="w-[110px]" src="./src/assets/logo.svg" alt="Logo" />
          </div>
          <div className="flex items-center gap-5">
            <ul className="flex text-black gap-6 mr-2.5 text-xl">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Lifestyle</li>
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Post Layout</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
            <div className="flex gap-3 bg-[#ff5671] items-center py-2 px-5 rounded-md cursor-pointer h-fit text-white">
              <BiLogoTelegram />
              <p>Join us</p>
            </div>
            <div className="cursor-pointer flex gap-2.5 text-black">
              <IoSearch className="text-2xl" />|
            </div>
            <div>
              <label className="toggle text-base-content border-2 border-black">
                <input type="checkbox" />
                <svg
                  aria-label="enabled"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="4"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </g>
                </svg>
                <svg
                  aria-label="disabled"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </label>
            </div>
            <div className="text-black cursor-pointer text-2xl">
              <IoMenuSharp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
