import img from "/static/images/storyset.svg";

export const Footer = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <div className="flex-grow flex flex-col justify-center items-center w-11/12 lg:w-3/4 md:flex-row">
        <div className="flex flex-col justify-center md:text-start text-center md:w-1/2">
          <p className="text-white text-lg poppins-semibold" data-aos="fade-up">
            And Yaa, One More Thing.
          </p>
          <div className="w-full h-0.5 bg-tesier mb-5" data-aos="fade-up"></div>
          <div className="flex gap-5 flex-col items-center md:items-start">
            <p className="text-gray montserrat sm:text-base text-sm" data-aos="fade-up">
              <span>One of my life principles is</span> "Appreciate the process, not the result. Your process may not be as fast as other people's, but that doesn't matter, this is not a competition."
            </p>
            <p className="text-gray montserrat sm:text-base text-sm" data-aos="fade-up">
              So, What are you waiting for?
            </p>
            <div data-aos="fade-up">
              <a href="mailto:ukimahfuda@gmail.com" target="_blank">
                <button className="poppins-semibold text-sm text-tesier outline-2 outline-offset-2 outline w-40 h-10 rounded-full transition-all duration-400 hover:bg-tesier hover:bg-opacity-25">Let's Connect</button>
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex flex-col items-center hidden w-1/2" data-aos="fade-up" data-aos-delay="50">
          <img src={img} alt="image" className="w-3/4" />
        </div>
      </div>
      <div className="mb-14 -mt-14 lg:mt-0 lg:mb-0 text-gray text-center text-[12px] md:text-sm montserrat opacity-75 flex flex-col justify-center items-center w-full py-2">
        <p>Build and Developed By Akhfee Lauki Mahfuda</p>
        <p>All Rights Reserved | 2024</p>
      </div>
    </div>
  );
};
