import React from "react";

export default function Footer() {
  return (
    // bg-[#020411]
    <footer className="text-gray-600 body-font bg-[#020411]">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-200">
          <span className="ml-3 text-xl">
            {" "}
            <img className="w-20" src="karunya-logo-white.png" alt="" />
            ICRAAE - 2024
          </span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Division of Aerospace <br />
          <a
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Developed by Karunya Hacks
          </a>
        </p>
      </div>
    </footer>
  );
}
