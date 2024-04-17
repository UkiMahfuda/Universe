import BtnNavbar from "../Elements/BtnNavbar";

const Navbar = () => {
  return (
    <div className="fixed poppins-semibold top-11 left-0 right-0 z-10 bg-secondary text-white py-3 px-5 max-w-md mx-auto rounded-full flex justify-evenly">
      <BtnNavbar>Home</BtnNavbar>
      <BtnNavbar>Skills</BtnNavbar>
      <BtnNavbar>Project</BtnNavbar>
    </div>
  );
};

export default Navbar;
