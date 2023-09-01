import React from "react";

export default function About() {
  return (
    <div
      style={{
        backgroundImage: "url(/stars.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
      className="p-6 bg-[#020411] text-gray-300"
    >
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold pb-6 ">Important Dates</h1>
        <table className="border-spacing-5 border-2 border-slate-500 text-sm">
          <tr className="">
            <td className="p-5 border border-slate-700">
              Abstract Submission Deadline
            </td>
            <td className="p-5 border border-slate-700">
              2 <sup>nd</sup> Nov 2023
            </td>
          </tr>
          <tr>
            <td className="p-5 border border-slate-700">
              Full Paper Submission Deadline
            </td>
            <td className="p-5 border border-slate-700">
              16 <sup>th</sup> Nov 2023
            </td>
          </tr>
          <tr>
            <td className="p-5 border border-slate-700">
              Notification of Acceptance
            </td>
            <td className="p-5 border border-slate-700">
              16 <sup>th</sup> Nov 2023
            </td>
          </tr>
          <tr>
            <td className="p-5 border border-slate-700">
              Last Date of Registration & Payment
            </td>
            <td className="p-5 border border-slate-700">
              16 <sup>th</sup> Nov 2023
            </td>
          </tr>
          <tr>
            <td className="p-5 border border-slate-700">
              Last Date For Revised Paper Submission
            </td>
            <td className="p-5 border border-slate-700">
              16 <sup>th</sup> Nov 2023
            </td>
          </tr>
          <tr>
            <td className="p-5 border border-slate-700">Conference Dates</td>
            <td className="p-5 border border-slate-700">
              29 <sup>th</sup> & 30 <sup>th</sup> March 2024
            </td>
          </tr>
        </table>
      </div>
      <div className="mt-3 lg:px-10">
        <h1 className="text-2xl font-bold">About Conference</h1>
        <p className="text-md lg:text-lg py-4 text-justify">
          2nd International Conference on recent advances in aerospace
          engineering aims to bring together leading academic scientists,
          researchers and research scholars to exchange and share their
          experiences and research results on all aspects of Aerospace Sciences.
          It also provides a premier interdisciplinary platform for researchers,
          practitioners and educators to present and discuss the most recent
          innovations, trends, and concerns as well as practical challenges
          encountered and solutions adopted in the fields of Aerospace.
        </p>

        <h1 className="text-2xl font-bold">Objectives of the Conference</h1>
        <p className="text-md lg:text-lg py-4 text-justify">
          Prospective authors are kindly encouraged to contribute to and help
          shape the conference through submissions of their research abstracts
          and papers. Also, high quality research contributions describing
          original and unpublished results of conceptual, constructive,
          empirical, experimental, or theoretical work in all areas of Aerospace
          are cordially invited for presentation at the conference.
        </p>

        <h1 className="text-2xl font-bold">Call for Papers</h1>
        <p className="text-md lg:text-lg py-4 text-justify">
          Prospective authors are kindly encouraged to contribute to and help
          shape the conference through submissions of their research abstracts
          and papers. Also, high quality research contributions describing
          original and unpublished results of conceptual, constructive,
          empirical, experimental, or theoretical work in all areas of Aerospace
          are cordially invited for presentation at the conference.
        </p>
        <h1 className="text-2xl font-bold">Guidelines for Authors</h1>
        <p className="text-md lg:text-lg py-4 text-justify">
          Authors should ensure that your submission meets the scope of the
          conference. Please refer to the Submission Guidelines before
          submitting your paper.
        </p>
        <div>
          <h1 className="text-2xl font-bold"> Publishing Partner</h1>
          <p className="text-md lg:text-lg py-4 text-justify">
            High Temperature Corrosion of Materials
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Registration fees</h1>
          <table className="my-4 w-full text-sm max-w-md md:text-md lg:text-lg">
            <tr className="border border-gray-400">
              <th className="p-2">S.No</th>
              <th className="p-2">Category</th>
              <th className="p-2">Registration</th>
            </tr>
            <tr className="border border-gray-400">
              <td className="p-2 text-center">1</td>
              <td className="p-2">Students UG &amp; PG</td>
              <td className="p-2 text-center">4000</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="p-2 text-center">2</td>
              <td className="p-2">Ph.D Scholars</td>
              <td className="p-2 text-center">5000</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="p-2 text-center">3</td>
              <td className="p-2">Academia</td>
              <td className="p-2 text-center">7000</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="p-2 text-center">4</td>
              <td className="p-2">Industry</td>
              <td className="p-2 text-center">9500</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="p-2 text-center">5</td>
              <td className="p-2">
                Attendee <br />
                (Accompanying Delegate)
              </td>
              <td className="p-2 text-center">2000</td>
            </tr>
          </table>
        </div>
        <div>
          <h1 className="text-xl font-bold lg:text-2xl">
            Glimpses of ICRAAE - 2017
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
  );
}
