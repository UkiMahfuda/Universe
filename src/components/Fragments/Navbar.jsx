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
        className={`grid grid-cols-2 lg:grid-cols-3 bg-primary transition-all duration-500 fixed top-0 left-0 right-0 z-50 text-white 
      ${isScrolled ? "bg-opacity-50 backdrop-blur-sm" : ""}`}
      >
        <div className="bg-transparent px-14 py-7">
          <p className="text-tesier montserrat-alternates-black text-xl bg-transparent">UkiMahfuda.</p>
        </div>
        <div id="topNavbar" className="bg-transparent invisible lg:visible text-white flex justify-evenly px-14 pt-6 p-3 poppins-semibold">
          {NavbarList.map((list) => (
            <BtnNavbar key={list.name} link={list.link}>
              {list.name}
            </BtnNavbar>
          ))}
        </div>
      </div>

      <div
        id="bottomNavbar"
        className={`lg:invisible poppins-semibold transition-all duration-500 bottom-0 left-0 right-0 z-50 text-white fixed flex justify-evenly bg-secondary py-2    
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
