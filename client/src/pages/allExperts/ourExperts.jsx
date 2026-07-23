import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import Person1 from "../../assets/images/MrSundarPandey.jpg";
import Person2 from "../../assets/images/chabilaldumre.jpg"
import Person3 from "../../assets/images/NischalPokharel.jpg";
import Fonts from "../../utils/fontsconfig";
import { useNavigate } from "react-router-dom";
import OurPeople from "../landing/ourPeople";

const ourPerson = [
  {
    id: 1,
    image: Person1,
    name: "Mr. Sundar Pandey",
    role: "MD",
    description:
      "Specializes in financial accounting, taxation, and practical bookkeeping with years of experience training aspiring accounting professionals.",
    address: "Milanchowk, Butwal, Nepal",
    phone: "+977 9800000001",
    email: "sundar@dosnpl.com",
    facebook: "https://facebook.com/sushantkc",
    instagram: "https://instagram.com/sushantkc",
    linkedin: "https://linkedin.com/in/sushantkc",
    portfolioState: false,
    twitter: "https://twitter.com/sushantkc",
  },
  {
    id: 2,
    image: Person2,
    name: "Mr. Chabi Lal Dumre",
    role: "MD",
    description: "10+ years Exp as Finance Controller",
    address: "Milanchowk, Butwal, Nepal",
    phone: "+977 9800000002",
    email: "sajjan@dosmultiservices.com",
    facebook: "https://facebook.com/sajjanraj",
    instagram: "https://instagram.com/sajjanraj",
    linkedin: "https://linkedin.com/in/sajjanraj",
    portfolioState: false,
    twitter: "https://twitter.com/sajjanraj",
  },
  {
    id: 3,
    image: Person3,
    name: "Nischal Pokharel",
    role: "IT Engineer",
    description:
      "Generative AI Developer with expertise in full-stack web/mobile applications utilizing Django REST APIs and modern frontend technologies, backed by a strong foundation in Python and JavaScript.",
    address: "Kapilvastu-09, Kapilvastu, Nepal",
    phone: "+977 9747397641 / +977 9867418552",
    email: "neeschalpok04@gmail.com",
    facebook: "https://www.facebook.com/nischal.pokharel.598234",
    instagram: "https://www.instagram.com/nees_c_hal/",
    linkedin: "https://www.linkedin.com/in/nischal-pokhrel-6543632b7/",
    twitter: "https://x.com/nischal45898",
    portfolioState: true,
    portfolio: "https://creanees.vercel.app/",
  },
];

const OurExperts = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col flex-1">
      <OurPeople colorState="F2F1FF" />
    </div>
  );
};

export default OurExperts;
