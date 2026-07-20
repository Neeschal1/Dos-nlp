import { useState, useEffect, useRef } from "react";
import Fonts from "../utils/fontsconfig";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Success Stories", url: "/success-stories" },
  { name: "Portals", url: "/job-portals" },
  { name: "Courses", url: "/available-courses" },
  { name: "About us", url: "/about-us" },
];

const socialLinks = [
  { name: "Facebook", url: "/" },
  { name: "Instagram", url: "/" },
  { name: "Twitter", url: "/" },
  { name: "Linkedin", url: "/" },
];

const supportLinks = [
  { name: "Help", url: "/" },
  { name: "Security", url: "/" },
  { name: "Cookies policy", url: "/" },
];

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black text-white w-full">
      <div className="px-4 sm:px-6 md:px-10 lg:px-15 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          <div className="flex flex-col gap-2 max-w-full lg:max-w-xl">
            <h2
              style={{
                fontSize: 40,
                lineHeight: "1.2",
                ...Fonts.poppins.medium,
              }}
              className="text-3xl md:text-4xl text-white"
            >
              Stay in loop
            </h2>
            <p
              style={{ ...Fonts.poppins.medium }}
              className="text-base sm:text-lg md:text-xl text-[#B8B8B8]"
            >
              Be the first to get updates on our latest content, special offers,
              and new features.
            </p>
            <p
              style={{ ...Fonts.poppins.regular }}
              className="text-xs text-[#A1A1A1]"
            >
              By signing up, you’re agreeing to receive marketing emails from
              Dos-Nepal. You can unsubscribe at any time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto">
            <input
              style={Fonts.poppins.regular}
              className="border border-white bg-transparent text-white px-4 py-2 placeholder:text-white h-12.5 sm:h-13.75 md:h-15 w-full sm:w-87.5 md:w-92"
              placeholder="Enter your email"
              type="text"
            />

            <button className="text-white py-2 px-6 text-sm border border-white whitespace-nowrap hover:bg-red-500 duration-600">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 mt-16">
          <div>
            <h3
              style={Fonts.poppins.medium}
              className="text-base font-semibold mb-4"
            >
              Quick links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-sm text-[#B8B8B8] hover:text-white duration-600"
                >
                  <a
                    style={{ whiteSpace: "nowrap", ...Fonts.poppins.medium }}
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center flex-col">
            <h3
              style={Fonts.poppins.medium}
              className="text-base font-semibold mb-4"
            >
              Social Media
            </h3>
            <ul className="flex flex-col gap-2 text-center">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-sm text-[#B8B8B8] hover:text-white duration-600"
                >
                  <a
                    style={{ whiteSpace: "nowrap", ...Fonts.poppins.medium }}
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-end flex-col">
            <h3
              style={Fonts.poppins.medium}
              className="text-base font-semibold mb-4"
            >
              Support
            </h3>
            <ul className="flex text-right flex-col gap-2">
              {supportLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-sm text-[#B8B8B8] hover:text-white duration-600"
                >
                  <a
                    style={{ whiteSpace: "nowrap", ...Fonts.poppins.medium }}
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2C2C2C] mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-[#B8B8B8] text-sm gap-4 text-center">
          <p className="text-white">
            <span style={Fonts.poppins.medium} className="font-semibold">
              © 2026 DOS-NEPAL
            </span>{" "}
            All rights reserved.
          </p>
          <p
            style={Fonts.poppins.medium}
            className="text-center text-[#ffffff]"
          >
            Designed and Developed with ❤️ by{" "}
            <div ref={popupRef} className="relative inline-block">
              <button
                onClick={() => setShowPopup(!showPopup)}
                className="font-semibold text-[16px] hover:underline"
              >
                Nischal Pokharel
              </button>

              {showPopup && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 rounded-2xl bg-white shadow-2xl p-3 z-50 animate-in fade-in zoom-in duration-300">
                  <h3 className="text-black font-semibold mb-3">
                    Connect with me
                  </h3>

                  <a
                    href="https://creanees.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowPopup(false)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <FaGlobe className="text-red-500" />
                    <span className="text-black">Portfolio</span>
                  </a>

                  <a
                    href="https://github.com/Neeschal1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowPopup(false)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <FaGithub className="text-black" />
                    <span className="text-black">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nischal-pokhrel-6543632b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowPopup(false)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <FaLinkedin className="text-blue-600" />
                    <span className="text-black">LinkedIn</span>
                  </a>

                  <a
                    href="https://www.facebook.com/nischal.pokharel.598234"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowPopup(false)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <FaFacebook className="text-blue-500" />
                    <span className="text-black">Facebook</span>
                  </a>

                  <a
                    href="https://www.instagram.com/nees_c_hal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowPopup(false)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <FaInstagram className="text-pink-500" />
                    <span className="text-black">Instagram</span>
                  </a>
                </div>
              )}
            </div>
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <a
              style={Fonts.poppins.medium}
              className="text-[#b8b8b8] hover:text-white duration-600"
              href="#"
            >
              Terms & Conditions
            </a>
            <a
              style={Fonts.poppins.medium}
              className="text-[#b8b8b8] hover:text-white duration-600"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              style={Fonts.poppins.medium}
              className="text-[#b8b8b8] hover:text-white duration-600"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
