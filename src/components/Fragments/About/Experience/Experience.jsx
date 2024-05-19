export const Experience = () => {
  return (
    <div className="h-dvh bg-primary flex justify-center items-center">
      <div className=" container flex flex-col items-center ">
        <div className=" w-full sm:w-10/12 px-5 sm:px-3  h-1/2 " data-aos="fade-up">
          <h1 className="text-white text-lg sm:text-xl montserrat-bold">My Experience</h1>
          <div className="w-1/2 h-0.5 bg-tesier"></div>
          <div className="flex justify-center items-center lg:my-10">
            <div className="flex flex-col lg:flex-row lg:w-9/12 ">
              <div className="my-5 lg:my-0 poppins-semibold flex lg:flex-col lg:w-1/5 overflow-auto text-gray">
                <div data-aos="fade-up" data-aos-delay="50">
                  <button className="transistion-all duration-300 hover:bg-secondary hover:border-opacity-50  px-5 py-2 md:w-[150px] text-start">Education</button>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <button className="transistion-all duration-300 hover:bg-secondary hover:border-opacity-50  px-5 py-2 md:w-[150px] text-start">Award</button>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <button className="transistion-all duration-300 hover:bg-secondary hover:border-opacity-50  px-5 py-2 md:w-[150px] text-start">Certification</button>
                </div>
              </div>
              <div className="flex gap-3 flex-col h-[400px] lg:h-[450px] overflow-auto lg:w-4/5 ">
                <div className="text-lg poppins-semibold">
                  <p className="text-tesier ">Universitas Teknokrat Indonesia</p>
                  <p className="text-white">Informatics</p>
                </div>
                <div className="montserrat text-gray flex gap-2 flex-col">
                  <p>Sep 2021 - Present</p>
                  <li>I enrolled in the Informatics Engineering program with the motivation that commercial jobs would be replaced by technology in the future, so I decided to pursue this field of study.</li>
                  <li>I enrolled in the Informatics Engineering program with the motivation that commercial jobs would be replaced by technology in the future, so I decided to pursue this field of study.</li>
                  <li>Starting from the fifth semester, I realized that coding was my main goal in pursuing this major. Therefore, I began to learn about programming and fell in love with coding ✨</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
