import React from "react";
import Person1 from "../../assets/images/person1.jpg";
import Person2 from "../../assets/images/person2.jpg";
import Person3 from "../../assets/images/person3.jpg";
import Person4 from "../../assets/images/person4.jpg";
import Fonts from "../../utils/fontsconfig";

const OurPeople = () => {
  const ourPerson = [
    {
      id: 1,
      image: Person1,
      name: "Sushant KC",
      role: "Artist",
    },
    {
      id: 2,
      image: Person2,
      name: "Sajjan Raj Vaidhya",
      role: "Song Writer",
    },
    {
      id: 3,
      image: Person3,
      name: "Miruna Magar",
      role: "Actress",
    },
    {
      id: 4,
      image: Person4,
      name: "Aayusha Kadel",
      role: "Lyricist",
    },
  ];
  return (
    <div className="flex flex-col pb-20 items-center justify-center">
      <div className="flex flex-col items-center">
        <h3
          className="bg-white py-2 px-4 rounded-full lg:w-fit text-center"
          style={Fonts.poppins.regular}
        >
          MEET OUR PEOPLE
        </h3>
        <h1 style={Fonts.poppins.medium} className="xl:text-4xl text-black">
          Leading Experts
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16 w-full max-w-7xl mx-auto">
        {ourPerson.map((person) => (
          <div
            key={person.id}
            className="group relative h-125 rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={person.image}
              alt={person.name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p style={Fonts.poppins.regular} className="uppercase tracking-[3px] text-sm text-gray-300">
                {person.role}
              </p>

              <h2
                style={Fonts.poppins.medium}
                className="text-3xl mt-2 transition-all duration-500 group-hover:-translate-y-2"
              >
                {person.name}
              </h2>
              <button
                style={Fonts.poppins.medium}
                className="mt-6 bg-[#FF090C] hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all duration-500 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 hover:cursor-pointer">
                Contact →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPeople;
