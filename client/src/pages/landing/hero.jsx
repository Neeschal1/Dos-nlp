import React from "react";
import HeroSectionImage from "./../../assets/images/hero.jpg";
import Navbar from "../../constants/navbar";
import Fonts from "../../utils/fontsconfig";
import Users from "../../assets/images/users.png";

const Hero = () => {
  return (
    <div className="flex flex-1 h-screen">
      <div
        className="hidden lg:flex h-screen w-full bg-cover backdrop bg-center flex-col "
        style={{ backgroundImage: `url(${HeroSectionImage})` }}
      >
        <div className="w-full h-full flex flex-col bg-black/5 p-3">
          <Navbar />

          {/* Center contents */}
          <div className="flex-1 flex items-center justify-start ml-5">
            <div className="flex flex-col gap-5">
              <div>
                <h1
                  style={Fonts.poppins.medium}
                  className="xl:text-7xl text-white"
                >
                  Learn Today,
                  <br />
                  Earn Tomorrow
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-lg text-white pt-3"
                >
                  Professional Accounting Training | German Language | Korean
                  Language | IT Training | Job Placement Services
                </h3>
              </div>

              <div className="flex gap-5">
                <button
                  style={Fonts.poppins.regular}
                  className="bg-[#FF090C] text-white px-10 py-4 rounded-4xl hover:bg-[#000000] duration-300 cursor-pointer"
                >
                  Get Free Career Counselling
                </button>
                <button
                  style={Fonts.poppins.regular}
                  className="border border-[#F2F1FF] hover:border-black text-white px-10 py-4 rounded-4xl hover:bg-[#000000] duration-300 cursor-pointer"
                >
                  Enroll your Admission 
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Contents */}
          <div className="flex flex-row items-end justify-between pb-8 px-4">
            <div className="flex flex-row items-center gap-3 px-6 py-3 rounded-2xl border-t border-l border-white/30 backdrop-blur-xs bg-black/15">
              <img className="h-15 w-38" src={Users} alt="Users" />
              <h3 style={Fonts.poppins.light} className="text-white">
                Trusted by 10000+ users
              </h3>
            </div>
            <div className="py-6 px-10 bg-black/15 backdrop-blur-xs rounded-3xl border-t border-r border-white/30">
              <h3 style={Fonts.poppins.light} className="text-white text-right">
                We help you build practical skills that open doors to global career opportunities.
                <br /> From professional accounting and IT training to German and Korean
                <br /> language courses, we provide industry-focused education and job
                <br /> placement support to help you achieve your career goals.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
