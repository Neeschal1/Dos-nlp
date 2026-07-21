import React from "react";
import { AvailableServices } from "../../constants/avaiableServices";
import { useLocation } from "react-router-dom";
import ServicesHeroSection from "./servicesHero";

const SingleServices = () => {
  const { state } = useLocation();
  return (
    <div>
      <ServicesHeroSection service={state} />
    </div>
  );
};

export default SingleServices;
