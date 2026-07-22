import React from "react";
import Navbar from "../../constants/navbar";
import AboutusBanner from "../../assets/images/aboutus.jpg";
import Fonts from "../../utils/fontsconfig";

const AboutUsHero = () => {
  return (
    <div className="relative flex flex-1 min-h-screen w-full overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${AboutusBanner})` }}
      />
      <div className="relative z-10 w-full min-h-screen flex flex-col bg-black/30 p-3">
        <Navbar />
        <div className="hidden xl:flex flex-1 flex-col lg:w-full items-center">
          <div className="flex-1 flex items-center justify-start ml-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center w-full">
                <h1
                  style={Fonts.poppins.medium}
                  className="text-7xl text-white"
                >
                  Empowering Learning Together
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-lg text-white lg:w-10/12 text-center pt-3"
                >At DOS-NLP, we believe quality education creates limitless opportunities. With experienced instructors, practical learning methods, and personalized guidance, we help students master accounting, computer skills, and international languages including German, Korean, and English. Together, we prepare learners with the confidence and skills needed to achieve academic, professional, and global success.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
