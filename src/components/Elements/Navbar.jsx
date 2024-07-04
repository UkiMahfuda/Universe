import React, { Fragment, useEffect, useState } from "react";
import BtnNavbar from "./BtnNavbar";
import { ContactList, NavbarList } from "../utils/data";
import { GrContactInfo } from "react-icons/gr";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <Fragment>
      <div
        className={`grid grid-cols-2 lg:grid-cols-3 bg-primary transition-all  bg-transparent duration-300 fixed top-0 left-0 right-0 z-50 text-white 
      ${isScrolled ? "bg-opacity-50 backdrop-blur-sm" : ""} ${isScrolling ? "transform -translate-y-full opacity-0" : ""}`}
      >
        <div className=" bg-transparent px-5 py-5 sm:px-14 sm:py-7" data-aos="fade-down" data-aos-duration="500" data-aos-delay="50">
          <p className="text-tesier montserrat-alternates-black text-xl bg-transparent cursor-pointer hover:animate-pulse transition-all">UkiMahfuda.</p>
        </div>
        <div id="topNavbar" className=" rounded-b-md bg-transparent hidden text-gray lg:flex justify-evenly px-14 pt-6 p-3 poppins-semibold" data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
          {NavbarList.map((list) => (
            <BtnNavbar key={list.name} link={list.link}>
              {list.name}
            </BtnNavbar>
          ))}
        </div>
      </div>

      <div className="fixed bottom-20 z-50 right-5 lg:hidden transition-all duration-300" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
        <motion.div
          layout
          data-isopen={isOpen}
          initial={{ borderRadius: 50 }}
          className={`parent bg-secondary w-14  h-14 flex items-start justify-center pt-3 overflow-hidden ${isScrolled ? "bg-opacity-50 backdrop-blur-sm" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div layout>
            <GrContactInfo size={30} className="text-tesier" />
            <motion.div layout className="py-10 gap-y-3 flex flex-col">
              {ContactList.map((list) => (
                <a className="opacity-60  justify-center text-gray py-3 px-1 transition-all duration-300 hover:-translate-y-1.5 hover:text-tesier hover:opacity-100" key={list.name} href={list.link}>
                  {list.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
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
