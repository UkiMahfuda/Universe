export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh bg-primary">
      <div className="text-white text-left sm:text-center container px-5 mx-auto">
        <p className="montserrat-bold text-sm sm:text-base text-tesier" data-aos="zoom-in">
          Hello, I'm
        </p>
        <p className="montserrat-alternates-black mb-3 text-3xl sm:text-4xl lg:text-5xl lg:my-4" data-aos="zoom-in" data-aos-delay="100">
          Akhfee Lauki Mahfuda
        </p>
        <p className="montserrat mb-6 text-base text-gray" data-aos="zoom-in" data-aos-delay="200">
          Undergraduate Informatics student who has a passion in the field of Software Engineering, especially <span className="text-tesier">Frontend Developer.</span> <br /> and has a little knowledge about Backend Developer.
        </p>
        <div data-aos="zoom-in" data-aos-delay="300">
          <button className="poppins-semibold text-sm text-tesier outline-2 outline-offset-2 outline w-40 h-10 rounded-full transition-all duration-400 hover:bg-tesier hover:bg-opacity-25">View My CV</button>
        </div>
      </div>
    </div>
  );
};
