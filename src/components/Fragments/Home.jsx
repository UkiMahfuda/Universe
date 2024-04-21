const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <div className="text-white text-center container px-3 mx-auto">
        <p className="montserrat-bold text-sm sm:text-base ">Hello, I'm</p>
        <p className="montserrat-alternates-black my-3 text-2xl sm:text-3xl lg:text-4xl lg:*:my-4">Akhfee Lauki Mahfuda</p>
        <p className="montserrat mb-6 text-base ">Undergraduate Informatics student who has a passion in Software Engineering, especially Frontend Developer.</p>
        <button className="poppins-semibold text-sm text-tesier outline-2 outline-offset-2 outline w-36 h-9 rounded-full transition-all duration-400 hover:bg-tesier hover:bg-opacity-25">View My CV</button>
      </div>
    </div>
  );
};

export default Home;
