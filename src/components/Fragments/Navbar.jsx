import React, { Fragment, useEffect, useState } from "react";
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
    <Fragment>
      <div
        id="topNavbar"
        className={`invisible sm:visible  fixed poppins-semibold transition-all duration-500  top-11 left-0 right-0 z-50 text-white px-5 max-w-md mx-auto rounded-full flex justify-evenly bg-primary 
     ${isScrolled ? "bg-opacity-50 backdrop-blur-sm" : ""}`}
      >
        {NavbarList.map((list) => (
          <BtnNavbar key={list.name} link={list.link}>
            {list.name}
          </BtnNavbar>
        ))}
      </div>
      <div
        id="bottomNavbar"
        className={`sm:invisible poppins-semibold transition-all duration-500 bottom-0 left-0 right-0 z-50 text-white px-5 fixed flex justify-evenly bg-secondary py-3     
      ${isScrolled ? "bg-opacity-50 backdrop-blur-sm" : ""}`}
      >
        {NavbarList.map((list) => (
          <BtnNavbar key={list.name} link={list.link}>
            {list.name}
          </BtnNavbar>
        ))}
      </div>
    </Fragment>
  );
};

export default Navbar;
