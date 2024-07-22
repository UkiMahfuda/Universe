import { useState } from "react";
import { ButtonMenu } from "../../../Elements/BtnMenu";
import { award, certification, education } from "../../../utils/data";
import { IoMdSchool } from "react-icons/io";
import { FaAward } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

export const Experience = () => {
  const [Active, setActive] = useState("education");

  const showEdu = () => {
    setActive("education");
  };
  const showAward = () => {
    setActive("award");
  };
  const showCertification = () => {
    setActive("certification");
  };

  return (
    <div className=" bg-primary flex justify-center  items-center">
      <div className=" container flex flex-col justify-center items-center">
        <div className=" w-full sm:w-10/12 px-5 sm:px-3 " data-aos="fade-up">
          <h1 className="text-white text-lg sm:text-xl montserrat-bold mt-24">My Experience</h1>
          <div className="w-1/2 h-0.5 bg-tesier"></div>
          <div className="flex justify-center items-center my-5 lg:my-0 lg:mt-10">
            <div className="w-full flex flex-row gap-2 md:w-full mb-10 justify-evenly h-1/2 ">
              <div className=" gap-2 poppins-semibold flex flex-col w-[12%] md:w-1/5 items-center text-gray ">
                <div data-aos="fade-up" data-aos-delay="50">
                  <button
                    onClick={showEdu}
                    className={` transistion-all duration-300 bg-secondary border-opacity-50 hover:bg-tesier hover:bg-opacity-75 hover:text-white rounded-full p-2 ${Active === "education" ? "bg-tesier bg-opacity-75 text-white" : ""}`}
                  >
                    <IoMdSchool size={24} />
                  </button>
                </div>
                <div data-aos="fade-up" data-aos-delay="60" className="w-0.5 h-[10%] bg-tesier"></div>
                <div data-aos="fade-up" data-aos-delay="75">
                  <button
                    onClick={showAward}
                    className={` transistion-all duration-300 bg-secondary border-opacity-50 hover:bg-tesier hover:bg-opacity-75 hover:text-white rounded-full p-2 ${Active === "award" ? "bg-tesier bg-opacity-75 text-white" : ""}`}
                  >
                    <FaAward size={24} />
                  </button>
                </div>
                <div data-aos="fade-up" data-aos-delay="85" className="w-0.5 h-[10%] bg-tesier"></div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <button
                    onClick={showCertification}
                    className={` transistion-all duration-300 bg-secondary border-opacity-50 hover:bg-tesier hover:bg-opacity-75 hover:text-white rounded-full p-2 ${Active === "certification" ? "bg-tesier bg-opacity-75 text-white" : ""}`}
                  >
                    <TbCertificate size={24} />
                  </button>
                </div>
              </div>
              {Active === "education" && (
                <div className="flex flex-col h-[400px] lg:h-[450px] overflow-auto   w-4/5 ">
                  <p className="text-xl montserrat-bold text-tesier mb-2">Education</p>
                  {education.map((edu) => (
                    <div key={edu.name}>
                      <p className="mb-1 text-white poppins-semibold text-lg md:text-xl">{edu.prodi}</p>
                      <div className="montserrat text-gray flex gap-2 flex-col">
                        <div className="text-white">
                          <p>{edu.name}</p>
                          <p className="text-sm opacity-75">{edu.tgl}</p>
                        </div>
                        {edu.desc.map((desc, index) => (
                          <li className="text-sm  xl:text-base" key={index}>
                            {desc}
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {Active === "award" && (
                <div className="flex flex-col h-[400px] lg:h-[450px] overflow-auto w-4/5 ">
                  <p className="text-xl montserrat-bold text-tesier mb-2">Award</p>
                  {award.map((award) => (
                    <div key={award.name}>
                      <div className="mb-1">
                        <a href={award.link} target="_blank" className="poppins-semibold text-white hover:opacity-65 transition-all text-lg md:text-xl">
                          {award.name}
                        </a>
                      </div>

                      <div className="montserrat text-gray flex gap-2 flex-col">
                        <div className="text-white">
                          <p>{award.tempat}</p>
                          <p className="text-sm opacity-75">{award.tgl}</p>
                        </div>
                        {award.desc.map((desc, index) => (
                          <li className="text-sm xl:text-base" key={index}>
                            {desc}
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {Active === "certification" && (
                <div className="flex flex-col h-[400px] lg:h-[450px] overflow-auto w-4/5 ">
                  <p className="text-xl montserrat-bold text-tesier mb-2">Certification</p>
                  {certification.map((certi) => (
                    <div key={certi.course} className="mb-5">
                      <div className="text-lg poppins-semibold">
                        <p className="text-white text-lg md:text-xl">{certi.course}</p>
                      </div>
                      <div className="montserrat text-gray flex gap-2 flex-col">
                        {certi.desc.map((descItem, descIndex) => (
                          <li key={descIndex}>
                            <a target="_blank" className="text-sm xl:text-base hover:opacity-65 transition-all" href={descItem.link}>
                              {descItem.name}
                            </a>
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
