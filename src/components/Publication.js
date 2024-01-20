import React from "react";

export default function Publication() {
  return (
    <div className="bg-[#f3f2ed] text-blue-800 font-poppins p-6 lg:p-10">
      <div>
        <div>
          <h1 className="text-2xl font-semibold">Publishing Partners</h1>
          <ol className="list-decimal space-y-5 my-5 ml-5">
            <li>
              Journal of Aeronautics Astronautics and Aviation (Scopus/ESCI)
            </li>
            <li>Journal of Integrated Science and Technology (Scopus)</li>
            <li>
              Strojniski vestnik - Journal of Mechanical Engineering
              (Scopus/WOS)
            </li>
            <li>
              High Temperature Corrosion of Materials/Oxidation of metals
              (Scopus/ESCI)
            </li>
            <li>
              New Space: The Journal of Space Entrepreneurship and Innovation
              (Scopus/WOS/ESCI)
            </li>
            <li>
              Key Engineering Materials (Scopus)
            </li>
          </ol>
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Submission Guidelines</h1>
          <ul className="list-disc space-y-5 my-5  ml-5">
            <li>
              <span className="font-semibold">Title: </span> Use Times New
              Roman, Font size 12, Bold
            </li>
            <li>
              <span className="font-semibold">Body Font and Style: </span>
              Use Times New Roman, Font size 10, Line spacing- 1.0
            </li>
            <li><span className="font-semibold">Sub titles: </span> Use Times New Roman, Font size 12, Bold</li>
            <li>
              <span className="font-semibold">Author Information: </span>Provide author names, affiliations, and
              contact details.
            </li>
            <li>Corresponding author E-mail is mandatory</li>
            <li>
              <span className="font-semibold">Abstract: </span>Include an abstract summarizing the research not more
              than 250 words
            </li>
            <li>
              <span className="font-semibold">Keywords: </span>List 3 to 4 relevant keywords for indexing and search
              purposes.
            </li>
            <li>
              <span className="font-semibold">Sections: </span>Organize your manuscript into sections, including
              Introduction, Methods, Results, Discussion, Conclusion, and
              References.
            </li>
            <li>
              <span className="font-semibold">Headings: </span>Use clear and consistent headings and subheadings to
              structure your paper.
            </li>
            <li>
              <span className="font-semibold">References: </span>Use either APA or MLA style. Make sure to follow the
              specific citation and reference formatting guidelines for the
              chosen style.
            </li>
            <li><span className="font-semibold">Figures and Tables: </span>Include clear captions and labels</li>
            <li>
              <span className="font-semibold">Ethical Considerations: </span>Provide information on ethics, conflicts
              of interest, and funding sources if any.
            </li>
            <li>
            Articles with more than 15% similarity will be rejected.
            </li>
          </ul>
        </div>
        <div className="my-10 italic">Note: After initial screening, based on the suggestions from our Editorial team the publishing journal will be decided and details will be communicated to the authors by mail</div>
      </div>
    </div>
  );
}
