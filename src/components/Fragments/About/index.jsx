import { useState } from "react";
import { TechStack, Tools } from "../../utils/data";
import { Content } from "./Content/Content";

const About = () => {
  const [active, setActive] = useState("stack");

  const showStack = () => {
    setActive("stack");
  };

  const showTools = () => {
    setActive("tools");
  };

  return (
    <div className="bg-primary">
      <Content />
      <div className="md:h-dvh flex  justify-center py-20">
        <div className=" container flex flex-col items-center">
          <div className=" w-full sm:w-10/12 px-5 sm:px-3" data-aos="fade-up">
            <h1 className="text-white text-lg sm:text-xl montserrat-bold">My Skill's</h1>
            <div className="w-1/2 h-0.5 bg-tesier"></div>
            <div className="my-7 poppins-semibold  text-gray">
              <button
                data-aos="fade-up"
                data-aos-delay="50 "
                onClick={showStack}
                className={`transistion-all duration-300 hover:bg-secondary hover:border-opacity-50  px-5 py-2 ${active === "stack" ? "bg-secondary border-opacity-50" : ""}`}
              >
                Tech Stack
              </button>
              <button
                data-aos="fade-up"
                data-aos-delay="100"
                onClick={showTools}
                className={`transistion-all duration-300 hover:bg-secondary hover:border-opacity-50  px-5 py-2 ${active === "tools" ? "bg-secondary border-opacity-50" : ""}`}
              >
                Tools
              </button>
            </div>
          </div>
          {active === "stack" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded-xl sm:px-0 px-8 w-full sm:w-9/12">
              {TechStack.map((stack) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={stack.delay}
                  className="hover1 rounded-xl py-5 w flex flex-col justify-between items-center gap-3 border-2 border-tesier border-opacity-0 hover:border-opacity-75 hover:scale-105 transition-all"
                >
                  <img className=" " src={stack.image} alt="icons" />
                  <div className="hover2 text-gray text-sm montserrat text-center flex flex-col gap-1">
                    <p>{stack.name}</p>
                    <p className="level">{stack.level}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {active === "tools" && (
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded-xl sm:px-0 px-8 w-full sm:w-9/12">
              {Tools.map((tools) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={tools.delay}
                  className="hover1 rounded-xl py-5 w flex flex-col justify-between items-center gap-3 border-2 border-tesier border-opacity-0 hover:border-opacity-75 hover:scale-105 transition-all"
                >
                  <img className=" " src={tools.image} alt="icons" />
                  <div className="hover2 text-gray text-sm montserrat text-center flex flex-col gap-1">
                    <p>{tools.name}</p>
                    <p className="level">{tools.option}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default About;
