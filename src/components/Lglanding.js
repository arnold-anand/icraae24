import React, { useState } from "react";

export default function Lglanding() {
  const [isNextClicked, setIsNextClick] = useState(false);
  const toggleImages = () => {
    setIsNextClick(!isNextClicked);
  };
  return (
    <div>
      <div className="flex items-center justify-center p-3">
        <div onClick={toggleImages} className="p-3 h-full">
          <button>
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
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div>
          {isNextClicked ? (
            <div>
              <img className="h-[396px] w-[1600px] rounded-md" src="lgLanding2.png" alt="" />
            </div>
          ) : (
            <div>
              <img className="rounded-md" src="lgLanding1.png" alt="" />
            </div>
          )}
        </div>
        <div onClick={toggleImages} className="p-3 h-full">
          <button>
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
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
