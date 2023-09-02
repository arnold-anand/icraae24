import React, { useEffect, useState } from "react";

export default function Home() {
  // State variable to store the remaining time
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Calculate the time remaining until March 29, 2023, 9:00 PM
  function calculateTimeLeft() {
    const targetDate = new Date("2024-03-29T21:00:00Z");
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
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
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
          2<sup>nd</sup> International Conference on Recent Advancements in Aerospace Engineering
        </div>
        <button className="ml-5 text-xl font-bold border-2 border-solid border-white p-3 rounded-lg w-56 bg-white my-3 max-w-xl">
          Register Now
        </button>
      </div>
      <div className="hidden lg:block">
        <div className="-mt-20">
          <div
            className="h-screen text-white px-5 flex justify-between"
            style={{
              backgroundImage: "url(/rocket.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
            }}
          >
            <div className="text-6xl w-[40%] py-56">
              2<sup>nd</sup> International Conference on Recent Advances in Aerospace Engineering
            </div>
            <div className="timer py-56">
              <div className="w-full text-white text-6xl flex-col items-center mr-10 space-y-20 max-w-[400px] p-3">
                <div className="flex items-center justify-center">
                  <div className="hrs">{timeLeft.days.toString().padStart(2, "0")}</div>
                  <div>:</div>
                  <div className="mins">{timeLeft.hours.toString().padStart(2, "0")}</div>
                  <div>:</div>
                  <div className="seconds">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                  <div>:</div>
                  <div className="seconds">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                </div>
                <div className="text-xl text-center">
                  {`Begins in ${timeLeft.days} Days ${timeLeft.hours} Hours ${timeLeft.minutes} Minutes ${timeLeft.seconds} Seconds`}
                </div>
                <button className="w-full text-2xl p-5 border-2 border-solid border-white rounded-xl">
                  Register Now
                </button>
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
