import React from "react";
import Fonts from "../../utils/fontsconfig";
import GermanLanguage from "../../assets/images/germanLanguageLearning.jpg";
import KoreanLanguage from "../../assets/images/koreanLanguageLearning.jpg";
import ComputerTraining from "../../assets/images/computerTraining.jpg";
import AccountingTraining from "../../assets/images/accountingTrainingClasses.jpg";

const Services = () => {
  const AvailableServices = [
    {
      id: 1,
      image: ComputerTraining,
      category: "IT Training",
      title: "Computer Training",
      subHeading: "Build practical digital skills for today's workplace.",
    },
    {
      id: 2,
      image: GermanLanguage,
      category: "Language",
      title: "German Language",
      subHeading: "Learn German for study, work, and global opportunities.",
    },
    {
      id: 3,
      image: KoreanLanguage,
      category: "Language",
      title: "Korean Language",
      subHeading: "Master Korean with confidence for career advancement.",
    },
    {
      id: 4,
      image: AccountingTraining,
      category: "Professional",
      title: "Accounting Training",
      subHeading: "Gain industry-ready accounting and finance expertise.",
    },
  ];
  
  return (
    <div className="flex flex-1 items-center justify-center p-10 flex-col">
      <div className="flex flex-col items-center">
        <p style={Fonts.poppins.regular} className="text-[#FF090C]">
          Innovative Solution
        </p>
        <h1 style={Fonts.poppins.medium} className="xl:text-4xl text-black">
          Consulting Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16 w-full max-w-7xl">
        {AvailableServices.map((service) => (
          <div key={service.id} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer">
            <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-all duration-500"></div>
            <div className="absolute top-7 left-7">
              <span style={Fonts.poppins.medium} className=" text-white px-6 py-2 rounded-full text-xs tracking-wider uppercase">
                {service.category}
              </span>
            </div>
            <div className="absolute bottom-1 left-7 right-7 text-white">
              <h2
                style={Fonts.poppins.medium}
                className="text-3xl mb-3 transition-all duration-500 group-hover:-translate-y-2"
              >
                {service.title}
              </h2>
              <p style={Fonts.poppins.regular} className="text-gray-200 leading-7 text-sm opacity-90">
                {service.subHeading}
              </p>
              <button
                className="mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-black px-5 py-3 rounded-full font-medium hover:bg-[#FF090C] hover:text-white">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
