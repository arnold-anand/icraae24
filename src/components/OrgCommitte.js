import React from "react";

const CommitteeSection = ({ title, members }) => (
  <div className="flex justify-center items-center mt-10">
    <table className="md:w-[90%] text-sm md:text-md lg:text-lg">
      <tr>
        <th colSpan={2} className="text-2xl">
          {title}
        </th>
      </tr>
      {members.map((member, index) => (
        <tr key={index}>
          <td className="p-2 border-b border-slate-500">{member.name}</td>
          <td className="p-2 border-b border-slate-500">{member.position}</td>
        </tr>
      ))}
    </table>
  </div>
);

const committeeMembers = [
  {
    title: "CHEIF PATRON",
    name: "Dr. Paul Dhinakaran",
    position: "Chancellor, KITS",
    image: "chancellor.webp",
  },
  // Add other committee members here
];

const patrons = [
  { name: "Dr. Mannar Jawahar", position: "Vice-Chancellor, KITS" },
  { name: "Dr. E. J. James", position: "Pro Vice-Chancellor, Research and Collaborations, KITS" },
  { name: "Dr. Ridling Margaret Waller", position: "Pro Vice-Chancellor, Quality Standards, KITS" },
  { name: "Dr. R. Elijah Blessing", position: "Registrar, KITS" },
  { name: "Dr. G. Prince Arulraj", position: "Dean, School of Engineering and Technology, KITS" },
];

const coPatrons = [
  { name: "Dr. K.R.S Krishnan", position: "Director-Innovation, Incubation & Entrepreneurship" },
  { name: "Dr. Madhu Ganesh", position: "Director-Industry Academia Collaboration" },
  { name: "Dr. D. Tensing", position: "Director-IQAC" },
  { name: "Dr. S. J. Vijay", position: "Director-Research and Consultancy" },
  { name: "Dr. S. Albones Raj", position: "Director Students Affairs" },
  { name: "Shri. CA.A. Joseph Amulraj", position: "Finance Officer" },
];

const convenor = {
  title: "CONVENOR",
  name: "Dr. Jims John Wessley",
  position: "Asso. Prof. & Head, Aerospace Engineering",
};

const organizingSecretary = {
  title: "ORGANIZING SECRETARY",
  name: "Dr. Aldin Justin Sundararaj",
  position: "Asst.Prof., Aerospace Engg.",
};

const memberSecretary = [
  { name: "Dr. S. Venkatachalam", position: "Asst.Prof., Aerospace Engg." },
  { name: "Dr. K. Anton Savio Lewise", position: "Asst.Prof., Aerospace Engg." },
];

const memberCoordinators = [
  { name: "Dr. Robinson Smart", position: "Prof., Aerospace Engg." },
  { name: "Dr. Prawin Angel", position: "Asso.Prof., Aerospace Engg." },
  { name: "Mrs. Gayathri", position: "Asst.Prof., Aerospace Engg." },
  { name: "Dr. Sushanlal Babu", position: "Asst.Prof., Aerospace Engg." },
  { name: "Mr. Prawin", position: "Asst.Prof., Aerospace Engg." },
  { name: "Dr. R. Ajith Raj", position: "Asst.Prof., Aerospace Engg." },
];

export default function OrgCommittee() {
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
          {committeeMembers.map((member, index) => (
            <div className="text-center" key={index}>
              <div className="text-3xl font-semibold p-2">{member.title}</div>
              <img className="w-56 rounded-md" src={member.image} alt="" />
              <div>{member.name}</div>
              <div>{member.position}</div>
            </div>
          ))}
          <CommitteeSection title="PATRONS" members={patrons} />
          <CommitteeSection title="CO-PATRONS" members={coPatrons} />
          <CommitteeSection title="CONVENOR" members={[convenor]} />
          <CommitteeSection title="ORGANIZING SECRETARY" members={[organizingSecretary]} />
          <CommitteeSection title="MEMBER SECRETARY" members={memberSecretary} />
          <CommitteeSection title="MEMBER COORDINATORS" members={memberCoordinators} />
        </div>
      </div>
    </div>
  );
}
