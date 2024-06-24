import { useState } from "react";
import { ButtonMenu } from "../../../Elements/BtnMenu";
import { TechStack, Tools } from "../../../utils/data";

export const Skills = () => {
  const [Active, setActive] = useState("stack");

  const showStack = () => {
    setActive("stack");
  };

  const showTools = () => {
    setActive("tools");
  };
  return (
    <div className="lg:h-[950px] flex  justify-center py-28">
      <div className=" container flex flex-col items-center">
        <div className=" w-full sm:w-10/12 px-5 sm:px-3" data-aos="fade-up">
          <h1 className="text-white text-lg sm:text-xl montserrat-bold">My Skill's</h1>
          <div className="w-1/2 h-0.5 bg-tesier"></div>
          <div className="my-7 poppins-semibold flex  text-gray">
            <div data-aos="fade-up" data-aos-delay="50">
              <ButtonMenu onClick={showStack} classname={`${Active === "stack" ? "bg-secondary border-opacity-50" : ""}`}>
                Tech Stack
              </ButtonMenu>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <ButtonMenu onClick={showTools} classname={`${Active === "tools" ? "bg-secondary border-opacity-50" : ""}`}>
                Tools
              </ButtonMenu>
            </div>
          </div>
        </div>
        {Active === "stack" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded-xl sm:px-0 px-8 w-full sm:w-9/12">
            {TechStack.map((stack) => (
              <div data-aos="fade-up" data-aos-delay={stack.delay} key={stack.name} data-aos-offset="0">
                <div className="group overflow-hidden rounded-xl py-5 w flex flex-col justify-between items-center gap-3 border-2 border-tesier border-opacity-0 hover:border-opacity-50 transition-all hover:scale-105 bg-tesier bg-opacity-0 hover:bg-opacity-5">
                  <img className="group-hover:scale-110 transition-all w-10 h-10 md:w-12 md:h-12" src={stack.image} alt="icons" />
                  <div className=" text-gray text-sm montserrat text-center flex flex-col gap-1">
                    <p className=" translate-y-3 group-hover:translate-y-0 transition-all">{stack.name}</p>
                    <p className="text-tesier translate-y-10 group-hover:translate-y-0 transition-all">{stack.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {Active === "tools" && (
          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded-xl sm:px-0 px-8 w-full sm:w-9/12">
            {Tools.map((tools) => (
              <div data-aos="fade-up" data-aos-delay={tools.delay} key={tools.name} data-aos-offset="0">
                <div className="group overflow-hidden rounded-xl py-5 w flex flex-col justify-between items-center gap-3 border-2 border-tesier border-opacity-0 hover:border-opacity-50 transition-all hover:scale-105 bg-tesier bg-opacity-0 hover:bg-opacity-5">
                  <img className="group-hover:scale-110 transition-all w-10 h-10 md:w-12 md:h-12" src={tools.image} alt="icons" />
                  <div className=" text-gray text-sm montserrat text-center flex flex-col gap-1">
                    <p className=" translate-y-3 group-hover:translate-y-0 transition-all">{tools.name}</p>
                    <p className="text-tesier translate-y-10 group-hover:translate-y-0 transition-all">{tools.option}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
