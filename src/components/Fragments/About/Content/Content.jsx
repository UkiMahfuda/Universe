import background from "/static/images/bg.webp";
import profile from "/static/images/profile.webp";

export const Content = () => {
  return (
    <div className="relative ">
      <img className=" w-full object-cover object-top h-dvh opacity-5" src={background} alt="background" />
      <div className=" container items-center absolute gap-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-evenly flex-wrap lg:flex-nowrap lg:px-24 py-5 lg:mt-0 mt-3 px-5 sm:px-10 ">
        <div className=" lg:w-2/3">
          <div className="mb-7">
            <h1 className="text-white text-lg xl:text-xl montserrat-bold" data-aos="fade-up">
              This is About Me
            </h1>
            <div className="w-1/2 h-0.5 bg-tesier" data-aos="fade-up" data-aos-delay="50"></div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <p className="text-gray montserrat text-base sm:text-base xl:text-base" data-aos="fade-up" data-aos-delay="100">
              Hi There, My name is Akhfee Lauki Mahfuda aka Uki, I am a 6th semester informatics student who has an interest in programming.
            </p>
            <p className="text-gray montserrat text-base sm:text-sm xl:text-base" data-aos="fade-up" data-aos-delay="150">
              As an Informatics student, I am used to working on projects using programming languages. such as project web development and mobile development
            </p>
            <p className="text-gray montserrat text-base sm:text-sm xl:text-base" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
              And for now my focus is in the field of <span className="text-tesier">Frontend Development,</span> I have strong knowledge and skills in <span className="text-tesier">Web Programming</span> and{" "}
              <span className="text-tesier">Mobile Programming,</span> especially UI.
            </p>
            <p className="text-gray montserrat text-base sm:text-sm xl:text-base" data-aos="fade-up" data-aos-delay="250" data-aos-offset="-100">
              I am committed to continuing to learn and develop, in line with ongoing technological advances, because I believe technology will not stop and will continue to make progress in the technology industry.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" data-aos-offset="-150">
          <div className="grayscale transition-all duration-500 hover:grayscale-0">
            <img src={profile} alt="" className="w-52 h-52 sm:w-72 sm:h-72" />
          </div>
        </div>
      </div>
    </div>
  );
};
