import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const SideContact = () => {
  return (
    <div className="">
      <div className="bg-transparent text-white flex flex-col fixed top-0 bottom-24 z-10 my-auto right-14 justify-end">
        <a className="my-3 bg-transparent group opacity-60 transition-all hover:-translate-y-1.5 hover:text-orange hover:opacity-100" href="">
          <FaGithub />
        </a>
        <a className="my-3 bg-transparent group opacity-60 transition-all hover:-translate-y-1.5 hover:text-orange hover:opacity-100" href="">
          <FaLinkedinIn />
        </a>
        <a className="my-3 bg-transparent group opacity-60 transition-all hover:-translate-y-1.5 hover:text-orange hover:opacity-100" href="">
          <FaInstagram />
        </a>
      </div>
      <div className="bg-transparent text-sm montserrat text-white flex flex-col fixed top-0 bottom-14 z-10 my-auto right-24 justify-end">
        <a className="bg-transparent opacity-60 transition-all hover:-translate-y-1.5 hover:text-orange hover:opacity-100" href="">
          ukimahfuda@gmail.com
        </a>
      </div>
    </div>
  );
};

export default SideContact;
