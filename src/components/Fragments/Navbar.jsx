import React, { Fragment, useEffect, useState } from "react";
import BtnNavbar from "../Elements/BtnNavbar";
import { ContactList, NavbarList } from "../utils/data";
import { GrContactInfo } from "react-icons/gr";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const tooglePopUp = () => {
    setPopUp(!popUp);
  };

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
        className={`grid grid-cols-2 lg:grid-cols-3 bg-primary transition-all bg-transparent duration-300 fixed top-0 left-0 right-0 z-50 text-white 
      ${isScrolled ? "bg-opacity-50 backdrop-blur-sm" : ""}`}
      >
        <div className=" bg-transparent px-5 py-5 sm:px-14 sm:py-7">
          <p className="text-tesier montserrat-alternates-black text-xl bg-transparent" data-aos="fade-down">
            UkiMahfuda.
          </p>
        </div>
        <div id="topNavbar" className=" rounded-b-md bg-transparent hidden text-gray lg:flex justify-evenly px-14 pt-6 p-3 poppins-semibold" data-aos="fade-down">
          {NavbarList.map((list) => (
            <BtnNavbar key={list.name} link={list.link}>
              {list.name}
            </BtnNavbar>
          ))}
        </div>
        <button onClick={tooglePopUp} className="flex justify-end px-5 py-5 sm:py-7 sm:px-14 lg:hidden" data-aos="fade-down">
          <GrContactInfo size={30} className="text-tesier " />
        </button>
        {popUp && (
          <div className="fixed top-16 right-5 sm:right-14 bg-gray-800 bg-opacity-50 flex lg:hidden items-center justify-center">
            <div className="bg-secondary p-6  rounded-2xl shadow-xl ">
              <h2 className="text-base text-gray poppins-semibold mb-4">Let's Connect !</h2>
              {ContactList.map((list) => (
                <a className="opacity-60 flex justify-center my-6 transition-all duration-300 hover:-translate-y-1.5 hover:text-tesier hover:opacity-100" key={list.name} href={list.link}>
                  {list.icon}
                </a>
              ))}
              <a className="opacity-60 flex justify-center mb-2 transition-all duration-300 hover:-translate-y-1.5 hover:text-tesier hover:opacity-100" href="">
                ukimahfuda@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>

      <div
        id="bottomNavbar"
        className={`lg:hidden rounded-t-md poppins-semibold transition-all duration-300 bottom-0 left-0 right-0 z-50 text-gray fixed flex justify-evenly bg-secondary py-1    
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
