import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [committeeMenuOpen, setCommitteeMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setAboutMenuOpen(false);
    setCommitteeMenuOpen(false);
  };
  

  const toggleAboutMenu = () => {
    setAboutMenuOpen(!aboutMenuOpen);
    setCommitteeMenuOpen(false);
    setIsOpen(false); // Close the main menu
  };
  
  const toggleCommitteeMenu = () => {
    setCommitteeMenuOpen(!committeeMenuOpen);
    setAboutMenuOpen(false);
    setIsOpen(false); // Close the main menu
  };
  

  return (
    <div className="sticky top-0">
      <div className="lg:hidden">
        <div
          className="left-0 w-full bg-[#020411] text-white"
        >
          <div className="p-7">
            <div className="flex justify-between items-center">
              <div className="text-xl">ICRAAE</div>
              <div className="text-white cursor-pointer" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Menu
            isOpen={isOpen}
            onStateChange={({ isOpen }) => setIsOpen(isOpen)}
            width={"60%"}
            customBurgerIcon={false}
            customCrossIcon={false}
          >
            <div className="h-screen flex flex-col space-y-5 md:space-y-10 p-4 bg-[#020411]">
              <div>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </div>
              <div>
                <span onClick={toggleAboutMenu} className="cursor-pointer">
                  About ICRAAE
                </span>
                {aboutMenuOpen && (
                  <div className="mt-2 space-y-2">
                    <Link to="/about-conference">About Conference</Link>
                    <Link to="/conference-topics">Conference Topics</Link>
                    <Link to="/downloads">Downloads</Link>
                  </div>
                )}
              </div>
              <div>
                <span onClick={toggleCommitteeMenu} className="cursor-pointer">
                  Committee
                </span>
                {committeeMenuOpen && (
                  <div className="mt-2 space-y-2">
                    <Link to="/organising-committee">Organising Committee</Link>
                    <Link to="/advisory-committee">Advisory Committee</Link>
                  </div>
                )}
              </div>
              <div>
                <Link to="/contact-us" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </div>
            </div>
          </Menu>
        </div>
      </div>
      <div className="hidden lg:block">
        <header className="sticky top-0 text-white w-screen px-10 bg-[#04040c] z-10">
          <div className="flex justify-between items-center pl-12">
            <div className="flex justify-center items-center">
              <img className="w-20" src="karunya-logo-white.webp" alt="" />
              <div className="text-3xl px-3">ICRAAE</div>
            </div>
            <div>
              <ul className="flex space-x-5">
                <Link to="">
                  <li>Home</li>
                </Link>
                <div className="relative">
                  <span onClick={toggleAboutMenu} className="cursor-pointer">
                    About ICRAAE
                  </span>
                  {aboutMenuOpen && (
                    <div className="absolute flex flex-col space-y-10 w-max p-5 left-0 bg-[#04040c] mt-1 rounded-xl ease-in duration-500">
                      <Link to="/about-conference">About Conference</Link>
                      <Link to="/conference-topics">Conference Topics</Link>
                      <Link to="/downloads">Downloads</Link>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <span onClick={toggleCommitteeMenu} className="cursor-pointer">
                    Committee
                  </span>
                  {committeeMenuOpen && (
                    <div className="ease-in duration-500 absolute left-0 space-y-10 p-5 w-max flex flex-col rounded-xl bg-[#04040c] mt-1">
                      <Link to="/organising-committee">Organising Committee</Link>
                      <Link to="/advisory-committee">Advisory Committee</Link>
                    </div>
                  )}
                </div>
                <Link to="/">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
