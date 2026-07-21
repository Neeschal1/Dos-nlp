import React, { useState } from "react";
import Fonts from "../../utils/fontsconfig";
import { useNavigate } from "react-router-dom";
import { AvailableServices } from "../../constants/avaiableServices";

const Services = () => {
  const navigation = useNavigate();

  const handleLearnMore = (service) => {
    navigation("/available-courses/services", {
      state: service,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-16 lg:py-30 w-full">
      <div className="flex flex-col items-center gap-5">
        <h3
          className="bg-white py-2 px-4 rounded-full lg:w-fit text-center"
          style={Fonts.poppins.regular}
        >
          INNOVATIVE SOLUTION
        </h3>
        <h1
          style={Fonts.poppins.medium}
          className="xl:text-4xl text-3xl text-black"
        >
          Consulting Services
        </h1>
      </div>
      <div className="w-full max-w-7xl mt-12 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {AvailableServices.map((service) => (
            <div
              key={service.id}
              className="group relative h-105 overflow-hidden rounded-4xl cursor-pointer shadow-xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10"></div>
              <div className="absolute top-7 left-7">
                <span
                  style={Fonts.poppins.medium}
                  className="rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white"
                >
                  {service.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                {/* Accent Line */}
                <div className="mb-5 h-1 w-16 rounded-full bg-[#FF090C] transition-all duration-500 group-hover:w-28"></div>

                <h2
                  style={Fonts.poppins.medium}
                  className="text-3xl text-white transition-all duration-500 group-hover:-translate-y-1"
                >
                  {service.title}
                </h2>

                <p
                  style={Fonts.poppins.regular}
                  className="mt-3 max-w-md text-white/80 leading-7"
                >
                  {service.subHeading}
                </p>
                <button
                  onClick={() => handleLearnMore(service)}
                  className="mt-7 cursor-pointer rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-500 hover:bg-[#FF090C] hover:text-white lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
                >
                  Explore Course →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
