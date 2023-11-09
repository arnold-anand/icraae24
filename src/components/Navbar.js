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
    // setIsOpen(false); // Close the main menu
  };

  const toggleCommitteeMenu = () => {
    setCommitteeMenuOpen(!committeeMenuOpen);
    setAboutMenuOpen(false);
    // setIsOpen(false); // Close the main menu
  };

  return (
    <div className="sticky top-0 font-poppins shadow-sm">
      <div className="lg:hidden">
        <div className="left-0 w-full bg-[#f3f2ed] text-blue-950">
          <div className="p-5">
            <div className="flex justify-between items-center">
              <img className="w-16" src="aesi-logo.png" alt="" />
              <img className="w-20 p-2" src="KITS-EMBLEM.png" alt="" />
              <div className="text-xl text-blue-800 font-semibold">ICRAAE</div>
              <div
                className="text-blue-800 cursor-pointer"
                onClick={toggleMenu}
              >
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
            <div className="h-screen flex flex-col space-y-5 md:space-y-10 p-4 bg-[#f3f2ed]">
              <div>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </div>
              <div>
                <span
                  onClick={toggleAboutMenu}
                  className="cursor-pointer flex items-center space-x-3"
                >
                  <div>About ICRAAE</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
                {aboutMenuOpen && (
                  <div className="mt-2 space-y-5 text-sm">
                    <div></div>
                    <div>
                      <Link onClick={toggleMenu} to="/about-conference">
                        About Conference
                      </Link>
                    </div>
                    <div>
                      <Link onClick={toggleMenu} to="/conference-topics">
                        Conference Topics
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                <span
                  onClick={toggleCommitteeMenu}
                  className="cursor-pointer flex space-x-8 items-center"
                >
                  <div>Committee</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
                {committeeMenuOpen && (
                  <div className="mt-2 space-y-5 text-sm">
                    <div></div>
                    <div>
                      <Link onClick={toggleMenu} to="/organising-committee">
                        Organising Committee
                      </Link>
                    </div>
                    <div>
                      <Link onClick={toggleMenu} to="/advisory-committee">
                        Advisory Committee
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <Link onClick={toggleMenu} to="/publication">
                  Publication
                </Link>
              </div>
              <div>
                <Link to="/contact-us" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </div>
              <div>
                <Link onClick={toggleMenu} to="/downloads">
                  Downloads
                </Link>
              </div>
            </div>
          </Menu>
        </div>
      </div>
      <div className="hidden lg:block font-poppins shadow-sm">
        <header className="sticky top-0 text-blue-800 w-screen px-10 bg-[#f3f2ed] z-10">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <img className="w-20 p-2" src="aesi-logo.png" alt="" />
              <img className="w-24 p-3" src="KITS-EMBLEM.png" alt="" />
              <div className="text-3xl px-3 font-semibold">ICRAAE</div>
            </div>
            <div>
              <ul className="flex space-x-5 items-center">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <div className="relative">
                  <span
                    onClick={toggleAboutMenu}
                    className="cursor-pointer flex items-center justify-center space-x-3"
                  >
                    <div>About ICRAAE</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                  {aboutMenuOpen && (
                    <div className="absolute flex flex-col space-y-5 w-max p-5 left-0 bg-[#f3f2ed] mt-1 rounded-xl">
                      <Link onClick={toggleAboutMenu} to="/about-conference">
                        About Conference
                      </Link>
                      <Link onClick={toggleAboutMenu} to="/conference-topics">
                        Conference Topics
                      </Link>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <span
                    onClick={toggleCommitteeMenu}
                    className="cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <div>Committee</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                  {committeeMenuOpen && (
                    <div className="ease-in duration-500 absolute left-0 space-y-5 p-5 w-max flex flex-col rounded-xl bg-[#f3f2ed] mt-1">
                      <Link
                        onClick={toggleCommitteeMenu}
                        to="/organising-committee"
                      >
                        Organising Committee
                      </Link>
                      <Link
                        onClick={toggleCommitteeMenu}
                        to="/advisory-committee"
                      >
                        Advisory Committee
                      </Link>
                    </div>
                  )}
                </div>
                <div>
                <Link onClick={toggleMenu} to="/publication">
                  Publication
                </Link>
              </div>
                <Link to="/contact-us">
                  <li>Contact Us</li>
                </Link>
                <Link onClick={toggleMenu} to="/downloads">
                  Downloads
                </Link>
                <div className="">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://eduserve.karunya.edu/Online/ExternalEvents.aspx"
                  >
                    <div className="p-2 ">
                      <button className="bg-[#fc8019] p-2 rounded-lg text-sm text-white font-bold">
                        Register Now
                      </button>
                    </div>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
