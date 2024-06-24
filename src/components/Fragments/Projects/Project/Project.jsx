import Slider from "./Slider/Slider";

export const Project = () => {
  return (
    <div className="flex justify-center items-center  pb-28 md:pb-0  ">
      <div className="container flex flex-col items-center">
        <div className="mb-7 w-11/12 lg:w-3/4 mt-28 ">
          <h1 className="text-white text-lg sm:text-xl montserrat-bold" data-aos="fade-up">
            Showing My Project's
          </h1>
          <div className="w-2/3 sm:w-1/2 h-0.5 bg-tesier" data-aos="fade-up" data-aos-delay="50"></div>
          <p className="mt-3 text-gray montserrat text-sm" data-aos="fade-up" data-aos-delay="100">
            These are all projects I've worked on, using the programming I use.
          </p>
        </div>
        <Slider />
      </div>
    </div>
  );
};
