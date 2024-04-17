const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-white text-center container mx-auto">
        <p className="montserrat">Hello, I'm</p>
        <p className="montserrat-alternates-black text-3xl">Akhfee Lauki Mahfuda</p>
        <p className="montserrat my-5">Undergraduate Informatics student who has a passion in programming, especially Frontend Developer.</p>
        <button className="montserrat text-orange outline-2 outline-offset-2 outline w-40 h-10 rounded-full">View My CV</button>
      </div>
    </div>
  );
};

export default Home;
