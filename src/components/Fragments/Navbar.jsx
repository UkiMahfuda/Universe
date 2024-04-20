import React, { useEffect, useState } from "react";
import BtnNavbar from "../Elements/BtnNavbar";
import { NavbarList } from "../utils/data";

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
      className={`invisible sm:visible transition-all fixed poppins-semibold top-11 left-0 right-0 z-50 text-white px-5 max-w-md mx-auto rounded-full flex justify-evenly bg-secondary 
     ${isScrolled ? "bg-opacity-50 backdrop-blur-sm" : ""}`}
    >
      {NavbarList.map((list) => (
        <BtnNavbar key={list.name} link={list.link}>
          {list.name}
        </BtnNavbar>
      ))}
    </div>
  );
};

export default Navbar;
