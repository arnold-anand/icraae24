import React from "react";

export default function About() {
  return (
    <div className="p-6 text-[#222] bg-[#f3f2ed] font-poppins">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold pb-6 text-blue-900">
          Important Dates
        </h1>
        <table className="border-spacing-5 border-2 border-slate-500 text-sm text-blue-800">
          <tr>
            <td className="p-5 border border-slate-700">
              Full Paper Submission Deadline
            </td>
            <td className="p-5 border border-slate-700">15 Jan 2024</td>
          </tr>
          <tr>
            <td className="p-5 border border-slate-700">
              Last Date For Revised Paper Submission
            </td>
            <td className="p-5 border border-slate-700">10 Feb 2024</td>
          </tr>
          <tr>
            <td className="p-5 border border-slate-700">
              Last Date of Registration & Payment
            </td>
            <td className="p-5 border border-slate-700">10 Mar 2024</td>
          </tr>

          <tr>
            <td className="p-5 border border-slate-700">Conference Dates</td>
            <td className="p-5 border border-slate-700">19 & 20 April 2024</td>
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
            <tr className="border">
              <th></th>
              <th colSpan={2} className="text-center border">AeSI Members</th>
              <th colSpan={2} className="text-center">Others</th>
            </tr>
            <tr className="border font-semibold text-center">
              <td className="p-2 border">DELEGATE CATEGORY</td>
              <td className="p-2 border">INR</td>
              <td className="p-2 border">USD</td>
              <td className="p-2 border">INR</td>
              <td className="p-2 border">USD</td>
            </tr>
            <tr className="border">
              <td className="p-2 text-xs lg:text-base border">Under Graduates/Post Graduates</td>
              <td className="p-1 border text-center">3500</td>
              <td className="p-1 border text-center">75</td>
              <td className="p-1 border text-center">4000</td>
              <td className="p-1 border text-center">100</td>
            </tr>
            <tr className="border">
              <td className="p-2 text-xs lg:text-base border">Research Scholar</td>
              <td className="p-1 border text-center">4500</td>
              <td className="p-1 border text-center">100</td>
              <td className="p-1 border text-center">5000</td>
              <td className="p-1 border text-center">120</td>
            </tr>
            <tr className="border">
              <td className="p-2 text-xs lg:text-base border">Academia</td>
              <td className="p-1 border text-center">6250</td>
              <td className="p-1 border text-center">125</td>
              <td className="p-1 border text-center">7000</td>
              <td className="p-1 border text-center">150</td>
            </tr>
            <tr className="border">
              <td className="p-2 text-xs lg:text-base border">Industry</td>
              <td className="p-1 border text-center">9000</td>
              <td className="p-1 border text-center">175</td>
              <td className="p-1 border text-center">9500</td>
              <td className="p-1 border text-center">200</td>
            </tr>
            <tr className="border">
              <td className="p-2 text-xs lg:text-base border">Listeners (Accompany Delegates)</td>
              <td className="p-1 border text-center">1500</td>
              <td className="p-1 border text-center">60</td>
              <td className="p-1 border text-center">2000</td>
              <td className="p-1 border text-center">100</td>
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
  );
}
