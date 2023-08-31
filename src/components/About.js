import React from 'react'

export default function About() {
  return (
    <div style={{
        backgroundImage: "url(/stars.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }} className="p-6 bg-[#020411] text-gray-300">
        
        <div className='flex justify-center items-center p-5'>
              
        </div>

        <h1 className='text-3xl font-bold'>About Conference</h1>
        <p className='text-md md:text-xl py-6 text-justify'>2nd International Conference on recent advances in aerospace engineering aims to bring together leading academic scientists, researchers and research scholars to exchange and share their experiences and research results on all aspects of Aerospace Sciences. It also provides a premier interdisciplinary platform for researchers, practitioners and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Aerospace.</p>

        <h1 className='text-3xl font-bold'>
        Objectives of the Conference
        </h1>
        <p className="text-md md:text-xl py-6 text-justify">
        Prospective authors are kindly encouraged to contribute to and help shape the conference through submissions of their research abstracts and papers. Also, high quality research contributions describing original and unpublished results of conceptual, constructive, empirical, experimental, or theoretical work in all areas of Aerospace are cordially invited for presentation at the conference.
        </p>

        <h1 className="text-3xl font-bold">Call for Papers</h1>
        <p className='text-md md:text-xl py-6 text-justify'>
        Prospective authors are kindly encouraged to contribute to and help shape the conference through submissions of their research abstracts and papers. Also, high quality research contributions describing original and unpublished results of conceptual, constructive, empirical, experimental, or theoretical work in all areas of Aerospace are cordially invited for presentation at the conference.
        </p>
        <h1 className="text-3xl font-bold">Guidelines for Authors</h1>
        <p className='text-md md:text-xl py-6 text-justify'>
        Please ensure your submission meets the conference&#39;s strict guidelines for
accepting scholarly papers. Downloadable versions of the check list for Full-Text
Papers and Abstract Papers.
Please refer to the Paper Submission Guideline, Abstract Submission
Guideline and Author Information before submitting your paper.
        </p>
        <div className='flex justify-center items-center flex-col'>

        <h1 className='text-3xl font-bold pb-6 '>Important Dates</h1>
        <table className='border-spacing-5 border-2 border-slate-500'>
          <tr className=''>
            <td className='p-5 border border-slate-700'>Abstract Submission Deadline</td>
            <td className='p-5 border border-slate-700'>2 <sup>nd</sup> Oct 2023</td>
          </tr>
          <tr>
            <td className='p-5 border border-slate-700'>Full Paper Submission Deadline</td>
            <td className='p-5 border border-slate-700'>16 <sup>th</sup> Oct 2023</td>
          </tr>
          <tr>
            <td className='p-5 border border-slate-700'>Notification of Acceptance</td>
            <td className='p-5 border border-slate-700'>16 <sup>th</sup> Oct 2023</td>
          </tr>
          <tr>
            <td className='p-5 border border-slate-700'>Last Date of Registration & Payment</td>
            <td className='p-5 border border-slate-700'>16 <sup>th</sup> Oct 2023</td>
          </tr>
          <tr>
            <td className='p-5 border border-slate-700'>Last Date For Revised Paper Submission</td>
            <td className='p-5 border border-slate-700'>16 <sup>th</sup> Oct 2023</td>
          </tr>
          <tr>
            <td className='p-5 border border-slate-700'>Conference Dates</td>
            <td className='p-5 border border-slate-700'>29 <sup>th</sup> & 30 <sup>th</sup> March 2024</td>
          </tr>
        </table>
        </div>

      </div>
  )
}
