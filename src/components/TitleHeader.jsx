import React from "react";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div className="text-center md:text-5xl text-3xl font-semibold">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
