import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sticky top-0 '>
      <div className='lg:hidden'>
        <div className='left-0 w-full bg-[#020411] text-white'>
          <div className="p-7">
            <div className='flex justify-between items-center'>
              <div className='text-xl'>ICRAAE</div>
              <div className='text-white cursor-pointer' onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            </div>
          </div>
          <Menu
            isOpen={isOpen}
            onStateChange={({ isOpen }) => setIsOpen(isOpen)}
            width={'60%'}
          >
            <div className="flex flex-col space-y-5 md:space-y-10 p-4 bg-[#020411] h-screen">
              <div><Link to="/" onClick={toggleMenu}>Home</Link></div>
              <div><Link to="/about-conference" onClick={toggleMenu}>About ICRAAE</Link></div>
              <div><Link to="/committe" onClick={toggleMenu}>Committe</Link></div>
              <div><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></div>
            </div>
          </Menu>
        </div>
      </div>
      <div className='hidden lg:block'>
        <header className="sticky top-0 text-white w-screen px-10 bg-[#04040c] z-10">
          <div className="flex justify-between items-center pl-12">
            <div className="flex justify-center items-center">
              <img src="logo-temp.svg" alt="" />
              <div className="text-3xl px-3">ICRAAE</div>
            </div>
            <div>
              <ul className="flex space-x-5">
                <Link to="">
                  <li>Home</li>
                </Link>
                <Link to="/about-conference">
                  <li>About ICRAAE</li>
                </Link>
                <Link to="/committe">
                  <li>Committe</li>
                </Link>
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