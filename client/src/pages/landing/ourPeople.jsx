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
    <section className="py-12 lg:py-20 bg-white lg:-mt-20 -mt-20">
      <div className="flex flex-col items-center text-center px-4">
        <h3
          className="bg-white py-2 px-5 rounded-full border border-gray-200 text-sm lg:text-base"
          style={Fonts.poppins.regular}
        >
          MEET OUR PEOPLE
        </h3>

        <h1
          style={Fonts.poppins.medium}
          className="text-3xl lg:text-4xl xl:text-5xl text-black mt-4"
        >
          Leading Experts
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {ourPerson.map((person) => (
            <div
              key={person.id}
              className="group relative h-105 sm:h-115 lg:h-125 rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={person.image}
                alt={person.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7 text-white">
                <p
                  style={Fonts.poppins.regular}
                  className="uppercase tracking-[3px] text-xs lg:text-sm text-gray-300"
                >
                  {person.role}
                </p>

                <h2
                  style={Fonts.poppins.medium}
                  className="text-2xl lg:text-3xl mt-2 transition-all duration-500 lg:group-hover:-translate-y-2"
                >
                  {person.name}
                </h2>
                <button
                  style={Fonts.poppins.medium}
                  className="mt-5 bg-[#FF090C] hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all duration-500 cursor-pointer opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                  Contact →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPeople;