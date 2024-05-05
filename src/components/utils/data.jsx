import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import webbooking from "/static/projects/webbooking.svg";
import mobilebooking from "/static/projects/mobilebooking.svg";
import bookshelf from "/static/projects/bookshelf.svg";

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
    link: "/project",
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

export const ProjectList = [
  {
    name: "Sistem Peminjaman Ruangan Berbasis Web.",
    image: webbooking,
    desc: "This website was designed and developed as a final assignment in a Web Programming course. In build this web uses Laravel 9 and MySql as database",
    tech: "Javascript, Laravel, Bootstrap, MySql",
  },
  {
    name: "Sistem Peminjaman Ruangan Berbasis Mobile.",
    image: mobilebooking,
    desc: "This website was designed and developed as a final assignment in a Mobile Programming course. This apps develop uses Firebase to manage the database so that data can be easily integrated",
    tech: "Flutter, Android Studio, Firebase.",
  },
  {
    name: "Bookshelf Apps.",
    image: bookshelf,
    desc: "This Apps is final course create frontend web for beginner. On this apps you can add book and delete book. In build it use DOM manipulation to organize and local storage for data",
    tech: "Javascript, TailwindCSS.",
  },
];
