import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [committeeMenuOpen, setCommitteeMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Calculate the time remaining until March 29, 2023, 9:00 PM
  function calculateTimeLeft() {
    const targetDate = new Date("2024-08-09T10:00:00Z");
    targetDate.setHours(targetDate.getHours() - 5); // Add 5 hours for IST
    targetDate.setMinutes(targetDate.getMinutes() - 30); // Add 30 minutes for IST

    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      // The countdown has ended
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  // Update the countdown timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

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
              <img className="w-20 p-2" src="KITS-EMBLEM.png" alt="" />
              <div className="text-xl text-blue-800 font-semibold">ICRAAE</div>
              <img className="w-16" src="aesi-logo.png" alt="" />
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
              {/* <div>
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
              </div> */}
              <div>
                <Link to="/conference-topics" onClick={toggleMenu}>
                  Topics
                </Link>
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
              <div className="">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://forms.gle/sWRgJD2i4GbxwQ3p9"
                >
                  <div className="">
                    <button className="bg-blue-700 w-full p-2 rounded-md text-sm text-white font-bold">
                      Submit Paper
                    </button>
                  </div>
                </a>
              </div>
              <div className="">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://eduserve.karunya.edu/Online/ExternalEvents.aspx"
                >
                  <div className="">
                    <button className="bg-[#fc8019] w-full p-2 rounded-md text-sm text-white font-bold">
                      Register Now
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </Menu>
        </div>
      </div>
      <div className="hidden lg:block font-poppins shadow-sm">
        <header className="sticky top-0 text-blue-800 w-screen px-7 bg-[#f3f2ed] z-10">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <img className="w-24 p-3" src="KITS-EMBLEM.png" alt="" />
              <div className="text-3xl px-3 font-semibold">ICRAAE</div>
              <img className="w-20 p-2" src="aesi-logo.png" alt="" />
              <div className="overscroll-contain flex items-center justify-center bg-[#f3f2ed] px-5">
                <div className="timer py-5 font-poppins text-blue-900">
                  <div className="text-6xl flex-col items-center space-y-5">
                    <div className="flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="hrs text-2xl md:text-4xl lg:text-[20px]">
                          {timeLeft.days.toString().padStart(2, "0")}
                        </div>
                        <div className="text-xs md:text-base lg:text-sm">
                          Days
                        </div>
                      </div>
                      <div className="mb-11 md:mb-7 p-2 text-2xl md:text-xs">
                        :
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="mins text-2xl md:text-4xl lg:text-[20px]">
                          {timeLeft.hours.toString().padStart(2, "0")}
                        </div>
                        <div className="text-xs md:text-base lg:text-sm">
                          Hours
                        </div>
                      </div>

                      <div className="mb-11 md:mb-7 p-2 text-2xl md:text-sm">
                        :
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="seconds text-2xl md:text-4xl lg:text-[20px]">
                          {timeLeft.minutes.toString().padStart(2, "0")}
                        </div>
                        <div className="text-xs md:text-base lg:text-sm">
                          Minutes
                        </div>
                      </div>

                      <div className="mb-11 md:mb-7 p-2 text-2xl md:text-sm">
                        :
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="seconds text-2xl md:text-4xl lg:text-[20px]">
                          {timeLeft.seconds.toString().padStart(2, "0")}
                        </div>
                        <div className="text-xs md:text-base lg:text-sm">
                          Seconds
                        </div>
                      </div>
                    </div>

                    {/* <div className="">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://eduserve.karunya.edu/Online/ExternalEvents.aspx"
              >
                <button className=" bg-[#fc8019] w-full text-xl p-2 border-2 border-solid text-white rounded-lg font-bold">
                  Register Now
                </button>
              </a>
            </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm">
              <ul className="flex space-x-3 items-center">
                <Link to="/">
                  <li>Home</li>
                </Link>
                {/* <div className="relative">
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
                </div> */}
                <Link to="/conference-topics" onClick={toggleMenu}>
                  Topics
                </Link>
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
                    href="https://forms.gle/sWRgJD2i4GbxwQ3p9"
                  >
                    <div className="p-2 ">
                      <button className="bg-blue-700 p-2 rounded-md text-sm text-white font-bold">
                        Submit Paper
                      </button>
                    </div>
                  </a>
                </div>
                <div className="">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://eduserve.karunya.edu/Online/ExternalEvents.aspx"
                  >
                    <div className="p-2 ">
                      <button className="bg-[#fc8019] p-2 rounded-md text-sm text-white font-bold">
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
