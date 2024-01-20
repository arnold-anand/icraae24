import React from "react";

export default function Footer() {
  return (
    // bg-[#020411]
    <footer className="text-blue-800 body-font bg-[#f3f2ed]">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-200">
          <span className="flex text-blue-800 justify-center items-center flex-col ml-3 text-xl">
            <img className="w-20" src="KITS-EMBLEM.png" alt="" />
            ICRAAE - 2024
          </span>
        </a>
        <p className="text-sm text-center text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Division of Aerospace <br />
          <a
            href="https://karunyahacks.org/"
            className="text-gray-600 ml-1"
          >
            Developed by Arnold @ KarunyaHacks
          </a>
        </p>
      </div>
    </footer>
  );
}
