import Tooltip from "../../../Elements/Tooltip";
import background from "/static/images/bg.webp";
import photo from "/static/images/photo.webp";

export const Content = () => {
  return (
    <div className="relative ">
      <img loading="lazy" className=" w-full object-cover object-top h-screen opacity-5" src={background} alt="background" />
      <div className=" container absolute gap-5 top-[13%] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex justify-evenly flex-wrap lg:flex-nowrap lg:px-24 px-5 sm:px-10 ">
        <div className=" lg:w-2/3 ">
          <div className="mb-7">
            <h1 className="text-white text-lg xl:text-xl montserrat-bold" data-aos="fade-up">
              This is About Me
            </h1>
            <div className="w-1/2 h-0.5 bg-tesier" data-aos="fade-up" data-aos-delay="50"></div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <p className="text-gray montserrat text-sm xl:text-base" data-aos="fade-up" data-aos-delay="100">
              Hi There, My name is Akhfee Lauki Mahfuda aka Uki, I am a 7th semester informatics student who has an interest in programming.
            </p>
            <p className="text-gray montserrat text-sm  xl:text-base" data-aos="fade-up" data-aos-delay="150">
              As an Informatics student, I am used to working on projects using programming languages. such as project web development and mobile development
            </p>
            <p className="text-gray montserrat text-sm  xl:text-base" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
              And for now my focus is in the field of <span className="text-tesier">Fullstack Development,</span> I have strong knowledge and skills in <span className="text-tesier">Frontend</span> and{" "}
              <span className="text-tesier">Backend,</span> in development Web.
            </p>
            <p className="text-gray montserrat text-sm  xl:text-base" data-aos="fade-up" data-aos-delay="250" data-aos-offset="-100">
              I am committed to continuing to learn and develop, in line with ongoing technological advances, because I believe technology will not stop and will continue to make progress in the technology industry.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" data-aos-offset="-150" className=" flex items-center">
          <div className="grayscale transition-all duration-500 hover:grayscale-0 rounded-full">
            {/* <Tooltip text="Fullstack Developer" name="Uki"> */}
            <img loading="lazy" src={photo} alt="profile" className="w-44 h-48 lg:w-52 lg:h-56 object-cover object-top rounded-full border-[1px] " />
            {/* </Tooltip> */}
          </div>
        </div>
      </div>
    </div>
  );
};
