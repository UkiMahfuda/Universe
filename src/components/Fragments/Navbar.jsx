import React, { useEffect, useState } from "react";
import BtnNavbar from "../Elements/BtnNavbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      id="navbar"
      className={`transition-all fixed poppins-semibold top-11 left-0 right-0 z-10 text-white px-5 max-w-md mx-auto rounded-full flex justify-evenly bg-secondary 
     ${isScrolled ? "bg-opacity-50 backdrop-blur-sm" : ""}`}
    >
      <BtnNavbar>Home</BtnNavbar>
      <BtnNavbar>About</BtnNavbar>
      <BtnNavbar>Project</BtnNavbar>
    </div>
  );
};

export default Navbar;
