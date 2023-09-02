import React from "react";

export default function Downloads() {
  return (
    <div
      style={{
        backgroundImage: "url(/stars.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <div className="grid place-items-center h-screen -mt-20">
        <div className="border w-36 h-36 lg:w-48 lg:h-36 rounded-lg">
          <div className="text-gray-300 bg-[#020411] rounded-t-lg p-3 text-center font-extrabold">
            BROUCHURE
          </div>
          <div className="flex items-center justify-center h-fit">
            <a
              className="text-white text-center"
              download={true}
              href="ICRAAE - 2024 Brochure.pdf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-16 h-16"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}