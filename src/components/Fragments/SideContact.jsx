import { ContactList } from "../utils/data";

const SideContact = () => {
  return (
    <div className="flex flex-row">
      <div data-aos="fade-up" data-aos-offset="0" data-aos-once="true" data-aos-delay="50" className="gap-7 text-white flex-col fixed my-auto justify-end bottom-32 right-16 z-50 hidden lg:flex bg-transparent">
        {ContactList.map(
          (list, index) =>
            index !== ContactList.length - 1 && (
              <a target="_blank" className="bg-transparent group opacity-60 transition-all duration-300 hover:-translate-y-1.5 hover:text-tesier hover:opacity-100" key={list.name} href={list.link}>
                {list.icon}
              </a>
            )
        )}
      </div>
      <div data-aos-offset="0" data-aos="fade-up" data-aos-once="true" data-aos-delay="100" className="bg-transparent text-sm lg:text-base px-5 text-white flex-col fixed hidden lg:flex bottom-16 z-50 right-32">
        <a target="_blank" className="bg-transparent opacity-60  transition-all duration-300 hover:-translate-y-1.5 hover:text-tesier hover:opacity-100" href="">
          ukimahfuda@gmail.com
        </a>
      </div>
    </div>
  );
};

export default SideContact;
