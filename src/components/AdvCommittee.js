import React from "react";

export default function AdvCommittee() {
  return (
    <div
      style={{
        backgroundImage: "url(/stars.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
      className=" flex flex-col justify-center items-center p-6 bg-[#020411] text-gray-300"
    >
      <h1 className=" sticky top-5 font-bold text-xl text-left my-5">
        International Advisory Committee
      </h1>
      <table className="md:w-1/2">
        <tr className="text-left">
          <th className="p-2">Name</th>
          <th className="p-2">Designation</th>
          <th className="p-2">Institute </th>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500 text-left">
            Dr.Erick C. Jones
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            Sr Dean , College of Engineering
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            University of Nevada, Reno , USA
          </td>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500 text-left">
            Dr.Chithirai Pon Selvan
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            Director Research & Head of School of Science and Engineering
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            Curtain University , Dubai
          </td>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500 text-left">
            Dr. Arasan Uthayasuryan
          </td>
          <td className="p-2 border-b border-slate-500 text-left">Post Doc</td>
          <td className="p-2 border-b border-slate-500 text-left">
            ENSTA,Paris
          </td>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500 text-left">
            Dr. Priya Vishnu
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            Assistant Professor
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            Massey University, New Zealand
          </td>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500 text-left">
            Dr. Roshan Thomas
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            Assistant Professor
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            Penn State University, USA
          </td>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500 text-left">
            Dr. Beulah Moses
          </td>
          <td className="p-2 border-b border-slate-500 text-left">Professor</td>
          <td className="p-2 border-b border-slate-500 text-left">
            Sydney Australia
          </td>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500 text-left">
            Dr. Gopalan Jagadeesh
          </td>
          <td className="p-2 border-b border-slate-500 text-left">Professor</td>
          <td className="p-2 border-b border-slate-500 text-left">
            Aerospace dept, IISc
          </td>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500 text-left">
            Dr.Joseph Lefkowitz{" "}
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            Assistant Professor
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            Technion Israel Institute of Technology and Science
          </td>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500 text-left">
            Dr.Chan Wai Lee
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            Assistant Professor
          </td>
          <td className="p-2 border-b border-slate-500 text-left">
            NTU, Singapore
          </td>
        </tr>
      </table>
      <h1 className="font-bold text-xl text-left my-5">
        National Advisory Committee
      </h1>
      <table className="md:w-1/2">
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Designation </th>
          <th className="p-2">Institute</th>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500 text-left">
            A M Pradeep
          </td>
          <td className="p-2 border-b border-slate-500 text-left">Professor</td>
          <td className="p-2 border-b border-slate-500 text-left">
            Aerospace Department, IIT Bombay
          </td>
        </tr>
        <tr>
          <td className="p-2 border-b border-slate-500">Dr. T Jayachandran</td>
          <td className="p-2 border-b border-slate-500">Retired Deputy</td>
          Director, VSSC/ISRO & Current visiting Professor at IITM
          <td className="p-2 border-b border-slate-500">IIT-Madras</td>
        </tr>
      </table>
    </div>
  );
}
