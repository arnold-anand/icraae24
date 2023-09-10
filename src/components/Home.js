import React, { useEffect, useState } from "react";

export default function Home() {
  // State variable to store the remaining time
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Calculate the time remaining until March 29, 2023, 9:00 PM
  function calculateTimeLeft() {
    const targetDate = new Date("2024-03-29T10:00:00Z");
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

  return (
    <>
      <div
        className="lg:hidden"
        style={{
          backgroundImage: "url(/sm-rocket-bg-min.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="text-white tracking-widest w-56 ml-3 p-3 text-3xl font-bold md:w-48 md:text-5xl">
          2<sup>nd</sup> International Conference on Recent Advancements in
          Aerospace Engineering
        </div>
        <div>
          <a rel="noreferrer" href="https://eduserve.karunya.edu/Online/ExternalEvents.aspx">
        <button className="ml-5 text-xl font-bold border-2 border-solid border-white p-3 rounded-lg w-56 bg-white my-3 max-w-xl">
          Register Now
        </button>
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="-mt-20">
          <div
            className="h-screen text-white px-10 flex justify-between"
            style={{
              backgroundImage: "url(/rocket.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
            }}
          >
            <div className="text-6xl w-[40%] py-56">
              2<sup>nd</sup> International Conference on Recent Advances in
              Aerospace Engineering
            </div>
            <div className="timer py-56">
              <div className="w-full text-white text-6xl flex-col items-center mr-10 space-y-20 max-w-[400px] p-3">
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="hrs">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xl">Days</div>
                  </div>
                  <div className="mb-14 p-2">:</div>
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="mins">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xl">Hours</div>
                  </div>

                  <div className="mb-14 p-2">:</div>
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="seconds">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xl">Minutes</div>
                  </div>

                  <div className="mb-14 p-2">:</div>
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="seconds">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xl">Seconds</div>
                  </div>
                </div>
                <div className="text-xl text-center text-white flex justify-center space-x-4 items-center">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <div>
                    March 29 <sup>th</sup> and 30 <sup>th</sup> 2024
                  </div>
                </div>
                <div className="">
                <a rel="noreferrer" target="_blank" href="https://eduserve.karunya.edu/Online/ExternalEvents.aspx">
                <button className="w-full text-2xl p-5 border-2 border-solid border-white rounded-xl">
                  Register Now
                </button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(/stars.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
        className="p-6 bg-[#020411] text-gray-300"
      >
        <div className="lg:p-10">
          <h1 className="text-3xl my-5">
            Karunya Institute of Technology & Sciences
          </h1>
          <div className="text-justify">
            Karunya Institute of Technology and Sciences was founded with the
            noble vision to raise professionals and leaders of high academic
            caliber and unblemished character, nurtured with a strong motivation
            and commitment to serve humanity. The institution is the fulfillment
            of the vision of its founders Late Dr. D. G. S. Dhinakaran and the
            present Chancellor Dr. Paul Dhinakaran. Established in 1986 as an
            Engineering College, it was granted an autonomous status in 1999 and
            declared Deemed-to-be University by the University Grants Commission
            (UGC) in recognition of its academic excellence by the Ministry of
            Human Resources Development under section 3 of the UGC Act, 1956
            vide notification no 9-3-2000-U3 dated 23.6.2004 of the Government
            of India. Accredited by NAAC, the institution offers a wide array of
            Bachelors, Masters and Doctoral Degree programmes in various
            branches of Engineering, Biotechnology, Food processing and
            Agricultural Sciences.
          </div>
        </div>
        <div className="lg:p-10">
          <h1 className="text-3xl my-5">Division of Aerospace Engineering</h1>
          <div className="text-justify">
            The Division of Aerospace Engineering at Karunya Institute of
            Technology and Sciences (KITS) was launched in the year 2009 with
            the primary objective of producing Aerospace Engineers to meet the
            growing demand and to serve the civilian aeronautical as well as the
            defense-oriented sectors. Our budding engineers acquire skills in
            core domains like Aerodynamics, Stress Analysis, Materials and
            Structures, Aircraft Design, Propulsion, Space Dynamics, Artificial
            Intelligence & Machine Learning, Smart Manufacturing that enable
            them to understand physical laws and cruise through time and space
            being creative and innovative, thus opening up the limitless
            opportunities in an endless space.
          </div>
        </div>
      </div>
    </>
  );
}
