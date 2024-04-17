import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="fixed poppins-semibold top-11 left-0 right-0 z-10 bg-secondary text-white py-3 px-5 max-w-md mx-auto rounded-full flex justify-evenly">
        <a href="#" className="bg-secondary">
          Home
        </a>
        <a href="#" className="bg-secondary">
          About
        </a>
        <a href="#" className="bg-secondary">
          Project
        </a>
      </div>

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-white text-center container mx-auto">
          <p className="montserrat">Hello, I'm</p>
          <p className="montserrat-alternates-black text-3xl">Akhfee Lauki Mahfuda</p>
          <p className="montserrat my-5">Undergraduate Informatics student who has a passion in programming, especially Frontend Developer.</p>
          <button className="montserrat text-orange outline-2 outline-offset-2 outline w-40 h-10 rounded-full">View My CV</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
