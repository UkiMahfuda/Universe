import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../utils/data";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

const Desc = () => {
  const params = useParams();

  let project = ProjectList.find((data) => {
    return data.slug === params.slug;
  });

  return (
    <Fragment>
      <div className="bg-primary ">
        <div className="relative h-[225px]">
          <img src={project.image} className="w-full h-full  object-cover object-top opacity-25" alt="" />
          <div className="absolute top-[10%] left-[5%] sm:top-[15%] md:top-[20%] lg:top-[25%] lg:left-[15%]">
            <a data-aos="fade-up" href="/project" className=" transition-all text-tesier hover:text-opacity-50">
              <IoMdArrowRoundBack size={40} />
            </a>
            <h1 data-aos="fade-up" data-aos-delay="50" className="text-white mt-5 lg:mt-8 text-xl sm:text-2xl lg:text-3xl montserrat-bold">
              {project.name}
            </h1>
            <div className="text-gray montserrat flex gap-3 my-5 lg:my-3 ">
              <a target="_blank" data-aos="fade-up" data-aos-delay="100" href={project.repo} className="hover:text-tesier transition-all">
                <FiGithub size={23} />
              </a>
              {/* <a data-aos="fade-up" data-aos-delay="100" href={project.link} className="hover:text-tesier transition-all">
                <GoLinkExternal size={23} />
              </a> */}
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center py-10">
          <div className="w-11/12 lg:w-[70%] flex flex-col gap-5">
            <div data-aos="fade-up" data-aos-delay="175" className=" h-[225px] flex justify-center">
              <video className="h-[225px]" autoPlay loop muted>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-3">
              <div className="flex flex-col gap-3 lg:gap-1 lg:w-3/5 px-3">
                <h2 data-aos="fade-up" data-aos-delay="200" className="text-white text-xl montserrat-bold">
                  Description
                </h2>

                {project.desc.split("\n\n ").map((paragraph, i) => (
                  <p data-aos="fade-up" data-aos-delay="250" data-aos-offset="100" className="text-gray indent-8 " key={i}>
                    {paragraph.trim()}
                  </p>
                ))}
              </div>{" "}
              <div className="flex flex-col gap-3 lg:gap-1 lg:w-2/5 px-3">
                <h2 data-aos="fade-up" data-aos-delay="200" className="text-white text-xl montserrat-bold">
                  Tech Stack
                </h2>
                <div className="flex flex-row gap-3" data-aos="fade-up" data-aos-delay="250">
                  {project.tech.map((tech, index) => (
                    <img data-aos="fade-up" data-aos-delay="250" data-aos-offset="0" key={index} src={tech} alt="tech" className="md:h-7 h-6" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Desc;
