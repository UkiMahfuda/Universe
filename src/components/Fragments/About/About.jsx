import { Fragment } from "react";
import background from "/static/images/bg.webp";
import profile from "/static/images/profile.webp";

const About = () => {
  return (
    <div className="bg-primary">
      <div className="relative">
        <img className="w-full object-cover object-top h-dvh opacity-5" src={background} alt="background" />
        <div className="container items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap sm:flex-nowrap sm:pr-5">
          <div className="px-5 lg:pl-28 lg:pr-16">
            <div className="mb-7">
              <h1 className="text-white text-lg sm:text-xl montserrat-bold ">This is About Me</h1>
              <div className="w-1/2 h-0.5 bg-tesier"></div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <p className="text-gray montserrat text-sm sm:text-base ">Hi There, My name is Akhfee Lauki Mahfuda aka Uki, I am a 6th semester informatics student who has an interest in programming.</p>
              <p className="text-gray montserrat text-sm sm:text-base ">As an Informatics student, I am used to working on projects using programming languages. such as project web development and mobile development</p>
              <p className="text-gray montserrat text-sm sm:text-base ">And for now my focus is in the field of Frontend Development, I have strong knowledge and skills in Web Programming and Mobile Programming, especially UI.</p>
              <p className="text-gray montserrat text-sm sm:text-base ">
                I am committed to continuing to learn and develop, in line with ongoing technological advances, because I believe technology will not stop and will continue to make progress in the technology industry.
              </p>
            </div>
          </div>
          <img src={profile} className=" w-52 h-52 lg:w-72 lg:h-72 mx-auto lg:mr-28 lg:ml-16 my-5 grayscale hover:grayscale-0 transition-all duration-500" alt="" />
        </div>
      </div>
    </div>
  );
};
export default About;
