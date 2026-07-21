import React from "react";
import { AvailableServices } from "../../constants/avaiableServices";
import { useLocation } from "react-router-dom";
import ServicesHeroSection from "./servicesHero";
import Description from "./description";
import Footer from "../../constants/footer";
import Gallery from "./gallery";
import Statistics from "./statistics";

const SingleServices = () => {
  const { state } = useLocation();
  return (
    <div>
      <ServicesHeroSection service={state} />
      <Statistics service={state} />
      <Description service={state} />
      <Gallery service={state} />
      <Footer />
    </div>
  );
};

export default SingleServices;
