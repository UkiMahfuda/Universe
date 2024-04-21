const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <div className="text-white text-center container px-3 mx-auto">
        <p className="montserrat-bold text-sm sm:text-base ">Hello, I'm</p>
        <p className="montserrat-alternates-black my-3 text-3xl sm:text-4xl lg:text-5xl lg:*:my-4">Akhfee Lauki Mahfuda</p>
        <p className="montserrat mb-6 text-base ">Undergraduate Informatics student who has a passion in Software Engineering, especially Frontend Developer.</p>
        <button className="poppins-semibold text-sm text-tesier outline-2 outline-offset-2 outline w-40 h-10 rounded-full transition-all duration-400 hover:bg-tesier hover:bg-opacity-25">View My CV</button>
      </div>
    </div>
  );
};

export default Home;
