import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const NavbarList = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Project",
    link: "",
  },
];

export const ContactList = [
  {
    name: "Github",
    link: "",
    icon: <FaGithub size={23} />,
  },
  {
    name: "Linkedin",
    link: "",
    icon: <FaLinkedinIn size={23} />,
  },
  {
    name: "Instagram",
    link: "",
    icon: <FaInstagram size={23} />,
  },
  {
    name: "Email",
    link: "",
    icon: <MdEmail size={23} />,
  },
];
