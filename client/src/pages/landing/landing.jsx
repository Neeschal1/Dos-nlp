import React from "react";
import Hero from "./hero";
import Statistics from "./statistics";

const Landing = () => {
  return (
    <div className="flex flex-1 w-full flex-col bg-[#F2F1FF]">
      <Hero />
      <Statistics />
    </div>
  );
};

export default Landing;
