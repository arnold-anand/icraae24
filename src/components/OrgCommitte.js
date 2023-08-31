import React from "react";

export default function OrgCommitte() {
  return (
    <div
      style={{
        backgroundImage: "url(/stars.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <div className="text-gray-300 p-5">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <div className="text-3xl font-semibold p-2">CHEIF PATRON</div>
            <img className="w-56 rounded-md" src="chancellor.webp" alt="" />
            <div className="">Dr. Paul Dhinakaran</div>
            <div>Chancellor, KITS</div>
          </div>

          <div className="flex justify-center items-center mt-10">
            <table className="md:w-3/4">
              <tr>
                <th colSpan={2} className="text-2xl">PATRONS</th>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                  Dr. Mannar Jawahar
                </td>
                <td className="p-2 border-b border-slate-500">
                  Vice-Chancellor, KITS
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                  Dr. E. J. James
                </td>
                <td className="p-2 border-b border-slate-500">
                  Pro Vice-Chancellor, Research and Collaborations, KITS
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Dr. Ridling Margaret Waller
                </td>
                <td className="p-2 border-b border-slate-500">
                  Pro Vice-Chancellor, 
Quality Standards, KITS
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Dr. R. Elijah Blessing
                </td>
                <td className="p-2 border-b border-slate-500">
                Registrar, KITS
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Dr.G.Prince Arulraj
                </td>
                <td className="p-2 border-b border-slate-500">
                Dean, School of Engineering and Technology, KITS
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-center items-center mt-10">
            <table className="md:w-3/4">
              <tr>
                <th colSpan={2} className="text-2xl">CO-PATRONS</th>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Dr. K.R.S Krishnan
                </td>
                <td className="p-2 border-b border-slate-500">
                Director-Innovation, Incubation & Entrepreneurship
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Dr. Madhu Ganesh
                </td>
                <td className="p-2 border-b border-slate-500">
                Director-Industry Academia Collaboration
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Dr. D. Tensing
                </td>
                <td className="p-2 border-b border-slate-500">
                Director-IQAC
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Dr. S. J. Vijay
                </td>
                <td className="p-2 border-b border-slate-500">
                Director-Research and Consultancy
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Dr. S.Albones Raj
                </td>
                <td className="p-2 border-b border-slate-500">
                Director Students Affairs
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Shri. CA.A.Joseph Amulraj
                </td>
                <td className="p-2 border-b border-slate-500">
                Finance Officer
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-center items-center mt-10">
            <table className="md:w-3/4">
              <tr>
                <th colSpan={2} className="text-2xl">CONVENOR</th>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Dr. Jims John Wessley
                </td>
                <td className="p-2 border-b border-slate-500">
                Asso. Prof. & Head, Aerospace Engineering
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-center items-center mt-10">
            <table className="md:w-[100%]">
              <tr>
                <th colSpan={2} className="text-2xl">ORGANIZING SECRETARY</th>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-500">
                Dr. Aldin Justin Sundararaj
                </td>
                <td className="p-2 border-b border-slate-500">
                Asst.Prof., Aerospace Engg.
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
