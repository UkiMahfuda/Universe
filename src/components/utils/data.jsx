import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

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
    icon: <FaGithub size={20} />,
  },
  {
    name: "Linkedin",
    link: "",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    name: "Instagram",
    link: "",
    icon: <FaInstagram size={20} />,
  },
];
