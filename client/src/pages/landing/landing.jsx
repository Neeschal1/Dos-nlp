import React from "react";
import Hero from "./hero";
import Statistics from "./statistics";
import Services from "./services";

const Landing = () => {
  return (
    <div className="flex flex-1 w-full flex-col bg-[#F2F1FF]">
      <Hero />
      <Statistics />
      <Services />
    </div>
  );
};

export default Landing;
