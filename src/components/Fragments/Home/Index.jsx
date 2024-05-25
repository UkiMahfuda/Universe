import { Fragment, useEffect } from "react";
import NET from "vanta/src/vanta.net";

export const Home = () => {
  useEffect(() => {
    NET({
      el: "#element",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x01c38d,
      backgroundColor: 0x191e29,
      points: 5.0,
      maxDistance: 15.0,
      spacing: 19.0,
    });
  }, []);
  return (
    <Fragment>
      <div className="h-dvh" id="element">
        <div className="flex flex-col justify-center items-center h-dvh bg-primary bg-opacity-75">
          <div className="text-white text-left sm:text-center container px-5 mx-auto">
            <p className="montserrat-bold text-sm sm:text-base text-tesier" data-aos="zoom-in">
              Hello, I'm
            </p>
            <p className="montserrat-alternates-black mb-3 text-3xl sm:text-4xl xl:text-5xl lg:my-4" data-aos="zoom-in" data-aos-delay="50">
              Akhfee Lauki Mahfuda
            </p>
            <p className="montserrat mb-6 text-sm xl:text-base text-gray" data-aos="zoom-in" data-aos-delay="100">
              I am a <span className="text-tesier">Frontend Developer</span> with interest in software engineering. I enjoy creating UI displays, especially in Web and Mobile development.
            </p>
            <div data-aos="zoom-in" data-aos-delay="200">
              <button className="poppins-semibold text-sm text-tesier outline-2 outline-offset-2 outline w-40 h-10 rounded-full transition-all duration-400 hover:bg-tesier hover:bg-opacity-25">View My CV</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
