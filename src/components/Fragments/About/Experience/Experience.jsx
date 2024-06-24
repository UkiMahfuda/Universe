import { useState } from "react";
import { ButtonMenu } from "../../../Elements/BtnMenu";
import { award, certification, education } from "../../../utils/data";

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
          <div className="flex justify-center items-center  lg:mt-10">
            <div className="w-full flex flex-col lg:flex-row  md:w-10/12 mb-10 md:px-3 h-1/2 ">
              <div className=" my-5 lg:my-0 poppins-semibold flex lg:flex-col  lg:w-3/12 overflow-auto text-gray">
                <div data-aos="fade-up" data-aos-delay="50">
                  <ButtonMenu onClick={showEdu} classname={`${Active === "education" ? "bg-secondary border-opacity-50" : ""}`}>
                    Education
                  </ButtonMenu>
                </div>
                <div data-aos="fade-up" data-aos-delay="75">
                  <ButtonMenu onClick={showAward} classname={`${Active === "award" ? "bg-secondary border-opacity-50" : ""}`}>
                    Award
                  </ButtonMenu>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <ButtonMenu onClick={showCertification} classname={`${Active === "certification" ? "bg-secondary border-opacity-50" : ""}`}>
                    Certification
                  </ButtonMenu>
                </div>
              </div>
              {Active === "education" && (
                <div className="flex gap-3 flex-col h-[400px] lg:h-[450px] overflow-auto  lg:w-9/12 ">
                  {education.map((edu) => (
                    <div key={edu.name}>
                      <div className="poppins-semibold">
                        <p className="text-tesier text-lg ">{edu.name}</p>
                        <p className="text-white text-base">{edu.prodi}</p>
                      </div>
                      <div className="montserrat text-gray flex gap-2 flex-col">
                        <p className="text-sm xl:text-base">{edu.tgl}</p>
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
                <div className="flex gap-3 flex-col h-[400px] lg:h-[450px] overflow-auto lg:w-9/12 ">
                  {award.map((award) => (
                    <div key={award.name} className="mb-5">
                      <div className=" poppins-semibold">
                        <a href={award.link} target="_blank" className="text-tesier hover:opacity-65 transition-all text-lg">
                          {award.name}
                        </a>
                        <p className="text-white text-base">{award.tempat}</p>
                      </div>
                      <div className="montserrat text-gray flex gap-2 flex-col">
                        <p className="text-sm  xl:text-base">{award.tgl}</p>
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
                <div className="flex gap-3 flex-col h-[400px] lg:h-[450px] overflow-auto lg:w-9/12 ">
                  {certification.map((certi) => (
                    <div key={certi.course} className="mb-5">
                      <div className="text-lg poppins-semibold">
                        <p className="text-tesier ">{certi.course}</p>
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
