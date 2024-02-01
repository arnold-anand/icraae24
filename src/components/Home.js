import React, { useEffect, useState } from "react";
import Mobilelanding from "./Mobilelanding";
import Lglanding from "./Lglanding";

export default function Home() {
  // State variable to store the remaining time
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

  return (
    <>
      {/* <div
        className="lg:hidden"
        style={{
          backgroundImage: "url(./sm-rocket-bg-min.jpg)",
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://eduserve.karunya.edu/Online/ExternalEvents.aspx"
          >
            <button className="ml-5 text-xl font-bold border-2 border-solid border-white p-3 rounded-lg w-56 bg-white my-3 max-w-xl">
              Register Now
            </button>
          </a>
        </div>
      </div> */}
      <div className="lg:hidden">
        <Mobilelanding />
      </div>
      <div className="hidden lg:block bg-[#f3f2ed]">
          <Lglanding></Lglanding>
      </div>
      {/* <div className="hidden lg:block">
        <div className="-mt-20">
          <div
            className="h-screen text-white px-10 flex justify-between"
            style={{
              backgroundImage: "url(./rocket.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
            }}
          >
            <div className="text-6xl w-[40%] py-48">
              2<sup>nd</sup> International Conference on Recent Advances in
              Aerospace Engineering
              <div className="text-lg pl-32 mt-10">In Association with</div>
              <div className=" text-4xl mt-5">
                Aeronautical Society of India
              </div>
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
                  <div>March 29 and 30 2024</div>
                </div>
                <div className="">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://eduserve.karunya.edu/Online/ExternalEvents.aspx"
                  >
                    <button className="w-full text-2xl p-5 border-2 border-solid border-white rounded-xl">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Timer Section */}
      {/* <div className="overscroll-contain flex items-center justify-center bg-[#f3f2ed]">
        <div className="timer py-5 font-poppins text-blue-900">
          <div className="text-6xl flex-col items-center space-y-5">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="hrs text-2xl md:text-4xl lg:text-6xl">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-base lg:text-xl">Days</div>
              </div>
              <div className="mb-11 md:mb-14 p-2 text-2xl md:text-3xl">:</div>
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="mins text-2xl md:text-4xl lg:text-6xl">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-base lg:text-xl">Hours</div>
              </div>

              <div className="mb-11 md:mb-14 p-2 text-2xl md:text-3xl">:</div>
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="seconds text-2xl md:text-4xl lg:text-6xl">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-base lg:text-xl">Minutes</div>
              </div>

              <div className="mb-11 md:mb-14 p-2 text-2xl md:text-3xl">:</div>
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="seconds text-2xl md:text-4xl lg:text-6xl">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-base lg:text-xl">Seconds</div>
              </div>
            </div>

            <div className="">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://eduserve.karunya.edu/Online/ExternalEvents.aspx"
              >
                <button className=" bg-[#fc8019] w-full text-xl p-2 border-2 border-solid text-white rounded-lg font-bold">
                  Register Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="p-6 text-blue-800 font-poppins bg-[#f3f2ed]">
        <div className="lg:px-10">
          <h1 className="text-2xl my-5 font-semibold text-blue-900">
            Karunya Institute of Technology & Sciences
          </h1>
          <div className="text-justify text-md lg:text-lg">
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
            of India. Accredited by NAAC with the highest grade A++, the
            institution offers a wide array of Bachelors, Masters and Doctoral
            Degree programmes in various branches of Engineering, Biotechnology,
            Food processing and Agricultural Sciences. From a humble beginning
            of 180 students, the institution has rapidly grown to 8000+ students
            and 450+ faculty representing 18 academic divisions. <br />
            <br /> In the three decades of service to higher education, Karunya
            Institute of Technology and Sciences has made significant
            progression in teaching learning, research and consultancy,
            innovation and transfer of technology, community service and value
            education. Translating the vision of the Founders into action, the
            institution is currently engaged in finding solutions to human
            problems in the four major areas such as Water, Food, Healthcare,
            and Sustainable Energy through scientific and technological
            interventions.
          </div>
        </div>
        <div className="lg:p-10">
          <h1 className="text-2xl my-5 text-blue-900 font-semibold">
            Division of Aerospace Engineering
          </h1>
          <div className="text-justify text-md lg:text-lg">
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
            opportunities in an endless space. The students are trained in
            aerospace design and analysis software and offered value-added
            courses in Digital Manufacturing, Artificial Intelligence in
            Aerospace manufacturing, Value Engineering etc., to keep them
            abreast with the latest developments. Over the years the Division of
            Aerospace Engineering has groomed 600+ engineers who have grown to
            occupy strategic positions at research organizations like GTRE and
            NAL, MNCs like Accenture, Capgemini, and Infosys, and in highly
            reputed companies like Quest Global, Agnikul Cosmos, Boeing, Team
            Indus etc., to name a few.
          </div>
        </div>
      </div>
      <div className="p-6 text-[#222] bg-[#f3f2ed] font-poppins">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold pb-6 text-blue-900">
          Important Dates
        </h1>
        <table className="border-spacing-5 border border-blue-800 text-sm text-blue-800">
        <tr>
            <td className="p-5 border border-blue-800">
              Abstract Submission Deadline
            </td>
            <td className="p-5 border border-blue-800">15 April 2024</td>
          </tr>
          <tr>
            <td className="p-5 border border-blue-800">
              Full Paper Submission Deadline
            </td>
            <td className="p-5 border border-blue-800">15 May 2024</td>
          </tr>
          <tr>
            <td className="p-5 border border-blue-800">
              Last Date For Revised Paper Submission
            </td>
            <td className="p-5 border border-blue-800">15 June 2024</td>
          </tr>
          <tr>
            <td className="p-5 border border-blue-800">
              Last Date of Registration & Payment
            </td>
            <td className="p-5 border border-blue-800">10 July 2024</td>
          </tr>

          <tr>
            <td className="p-5 border border-blue-800">Conference Dates</td>
            <td className="p-5 border border-blue-800">9 & 10 August 2024</td>
          </tr>
        </table>
      </div>
      <div className="mt-3 lg:px-10">
        <h1 className="text-2xl font-bold text-blue-900">
          About the Conference
        </h1>
        <p className="text-md lg:text-lg py-4 text-justify text-blue-800">
          The second International Conference on Recent Advances in Aerospace
          Engineering aims to bring together leading academic scientists,
          researchers and research scholars to exchange and share their
          experiences and research results on all aspects of Aerospace Sciences.
          It also provides a premier interdisciplinary platform for researchers,
          practitioners and educators to present and discuss the most recent
          innovations, trends, and concerns as well as practical challenges
          encountered and solutions adopted in the fields of Aerospace.
        </p>

        <h1 className="text-2xl font-bold text-blue-900">
          Objectives of the Conference
        </h1>
        <p className="text-md lg:text-lg py-4 text-justify text-blue-800">
          Prospective authors are kindly encouraged to contribute to and help
          shape the conference through submissions of their research abstracts
          and papers. Also, high quality research contributions describing
          original and unpublished results of conceptual, constructive,
          empirical, experimental, or theoretical work in all areas of Aerospace
          Engineering are cordially invited for presentation at the conference.
        </p>

        <h1 className="text-2xl font-bold text-blue-900">Call for Papers</h1>
        <p className="text-md lg:text-lg py-4 text-justify text-blue-800">
          Academicians, researchers and industry professionals are being invited
          to submit their original research papers previously unpublished, not
          currently under review by another conference or journal. All
          submission will be subjected to at least two blind reviews. Acceptance
          wil be based entirely on quality, relevance and originality. The
          authors can send their Abstracts/ Full paper(s) online. The selection
          for oral presentation will be strictly as per the feedback from the
          technical review committee. All selected peer-reviewed research/
          review papers presented in the conference will be recommended for
          publication through our supporting publishing partners.
        </p>
        <h1 className="text-2xl font-bold text-blue-900">
          Guidelines for Authors
        </h1>
        <p className="text-md lg:text-lg py-4 text-justify text-blue-800">
          Authors should ensure that your submission meets the scope of the
          conference. Please refer to the Submission Guidelines before
          submitting your paper.
        </p>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-blue-900">
            Registration Fees
          </h1>
          <table className="text-blue-800 my-4 text-sm  md:text-md max-w-md lg:text-lg ">
            <tr className="border border-blue-800">
              <th></th>
              <th colSpan={2} className="text-center border border-blue-800">AeSI Members</th>
              <th colSpan={2} className="text-center">Others</th>
            </tr>
            <tr className="border font-semibold text-center">
              <td className="p-2 border border-blue-800">DELEGATE CATEGORY</td>
              <td className="p-2 border border-blue-800">INR</td>
              <td className="p-2 border border-blue-800">USD</td>
              <td className="p-2 border border-blue-800">INR</td>
              <td className="p-2 border border-blue-800">USD</td>
            </tr>
            <tr className="border">
              <td className="p-2 text-xs lg:text-base border border-blue-800">Under Graduates/Post Graduates</td>
              <td className="p-1 border border-blue-800 text-center">3500</td>
              <td className="p-1 border border-blue-800 text-center">75</td>
              <td className="p-1 border border-blue-800 text-center">4000</td>
              <td className="p-1 border border-blue-800 text-center">100</td>
            </tr>
            <tr className="border border-blue-800">
              <td className="p-2 text-xs lg:text-base border border-blue-800">Research Scholar</td>
              <td className="p-1 border border-blue-800 text-center">4500</td>
              <td className="p-1 border border-blue-800 text-center">100</td>
              <td className="p-1 border border-blue-800 text-center">5000</td>
              <td className="p-1 border border-blue-800 text-center">120</td>
            </tr>
            <tr className="borde border-blue-800">
              <td className="p-2 text-xs lg:text-base border border-blue-800">Academia</td>
              <td className="p-1 border border-blue-800 text-center">6250</td>
              <td className="p-1 border border-blue-800 text-center">125</td>
              <td className="p-1 border border-blue-800 text-center">7000</td>
              <td className="p-1 border border-blue-800 text-center">150</td>
            </tr>
            <tr className="border">
              <td className="p-2 text-xs lg:text-base border border-blue-800">Industry</td>
              <td className="p-1 border border-blue-800 text-center">9000</td>
              <td className="p-1 border border-blue-800 text-center">175</td>
              <td className="p-1 border border-blue-800 text-center">9500</td>
              <td className="p-1 border border-blue-800 text-center">200</td>
            </tr>
            <tr className="border border-blue-800">
              <td className="p-2 text-xs lg:text-base border border-blue-800">Listeners (Accompany Delegates)</td>
              <td className="p-1 border border-blue-800 text-center">1500</td>
              <td className="p-1 border border-blue-800 text-center">60</td>
              <td className="p-1 border border-blue-800 text-center">2000</td>
              <td className="p-1 border border-blue-800 text-center">100</td>
            </tr>
          </table>
        </div>
        <div>
          <h1 className="text-xl font-bold text-blue-900 lg:text-2xl">
            Glimpses of 1 <sup>st</sup> International Conference ICRAAE
          </h1>
          <div className=" py-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
            <img
              className="rounded-lg w-full md:w-72"
              src="https://ik.imagekit.io/andy77/DSC_0059.JPG?updatedAt=1693560927350"
              alt=""
            />
            <img
              className="rounded-lg w-full md:w-72"
              src="https://ik.imagekit.io/andy77/DSC_0071.JPG?updatedAt=1693560927310"
              alt=""
            />
            <img
              className="rounded-lg w-full md:w-72"
              src="https://ik.imagekit.io/andy77/DSC_0083.JPG?updatedAt=1693560927266"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
