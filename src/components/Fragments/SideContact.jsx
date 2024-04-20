import { ContactList } from "../utils/data";

const SideContact = () => {
  return (
    <div className="">
      <div className=" text-white flex flex-col fixed my-auto justify-end lg:bottom-24 lg:right-14 z-50 invisible sm:visible sm:right-8 sm:bottom-16">
        {ContactList.map((list) => (
          <a className="my-3 bg-transparent group opacity-60 transition-all duration-300 hover:-translate-y-1.5 hover:text-tesier hover:opacity-100" key={list.name} href={list.link}>
            {list.icon}
          </a>
        ))}
      </div>
      <div className="bg-transparent text-sm lg:text-base  p-5 text-white flex flex-col fixed lg:bottom-14 invisible sm:visible sm:right-16 sm:bottom-5 z-50 my-auto lg:right-24 justify-end">
        <a className="bg-transparent opacity-60  transition-all duration-300 hover:-translate-y-1.5 hover:text-tesier hover:opacity-100" href="">
          ukimahfuda@gmail.com
        </a>
      </div>
    </div>
  );
};

export default SideContact;