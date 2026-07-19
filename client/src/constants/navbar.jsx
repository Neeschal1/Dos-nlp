import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import Fonts from "../utils/fontsconfig.js";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ textColor = "white", logo = Logo }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Our Courses", path: "/available-courses" },
    { name: "Job Portals", path: "/job-portals" },
    { name: "About Us", path: "/about-us" },
  ];

  const [active, setActive] = useState(() => {
    const currentItem = navItems.find(
      (item) => item.path === location.pathname
    );
    return currentItem ? currentItem.name : "Our Story";
  });

  useEffect(() => {
    const currentItem = navItems.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) setActive(currentItem.name);
  }, [location.pathname]);

  return (
    <div className="flex flex-row items-center justify-between w-full p-4 gap-4 bg-transparent">
      {" "}
      <img className="h-15 w-15" src={logo} alt="Logo" />{" "}
      <div className="flex bg-white/5 backdrop- p-2 border-t border-b border-r border-white/30 shadow-lg rounded-full items-center gap-3">
        {navItems.map((item) => (
          <button
            style={Fonts.poppins.light}
            key={item.name}
            onClick={() => {
              setActive(item.name);
              navigate(item.path);
            }}
            className={`text-l font-poppins font-regular rounded-3xl px-6 py-2 transition-colors duration-800
              ${
                active === item.name
                  ? `bg-[#FF090C] text-[#F2F1FF]`
                  : `bg-transparent text-${textColor} hover:bg-[#000000] hover:text-[#F2F1FF]/70`
              }
            `}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div>
        <button
          style={Fonts.poppins.regular}
          className="bg-[#FF090C] text-white px-10 py-4 rounded-4xl hover:bg-[#000000] duration-300 cursor-pointer"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;