import React, { useState } from "react";

export default function Lglanding() {
  const [isNextClicked, setIsNextClick] = useState(false);
  const toggleImages = () => {
    setIsNextClick(!isNextClicked);
  };
  return (
    <div className="bg-[#f3f2ed]">
      <div className="flex items-center justify-center ">
        </div>
        <div className="p-3">
        <img className="rounded-md" src="icraae24-banner-compressed.jpg" alt="" />
        </div>
    </div>
  );
}
