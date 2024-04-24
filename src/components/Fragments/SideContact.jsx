import { ContactList } from "../utils/data";

const SideContact = () => {
  return (
    <div className="">
      <div className=" text-white flex-col fixed my-auto justify-end lg:bottom-24 lg:right-16 z-50 hidden lg:flex bg-transparent">
        {ContactList.map((list) => (
          <a className="my-3 bg-transparent group opacity-60 transition-all duration-300 hover:-translate-y-1.5 hover:text-tesier hover:opacity-100" key={list.name} href={list.link}>
            {list.icon}
          </a>
        ))}
      </div>
      <div className="bg-transparent text-sm lg:text-base  p-5 text-white  flex-col fixed hidden lg:flex  lg:bottom-10 z-50 my-auto lg:right-24 justify-end">
        <a className="bg-transparent opacity-60  transition-all duration-300 hover:-translate-y-1.5 hover:text-tesier hover:opacity-100" href="">
          ukimahfuda@gmail.com
        </a>
      </div>
    </div>
  );
};

export default SideContact;
