import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import webbooking from "/static/projects/webbooking/webbooking.svg";
import mobilebooking from "/static/projects/mobilebooking/mobilebooking.svg";
import bookshelf from "/static/projects/bookshelf/bookshelf.svg";
import web1 from "/static/projects/webbooking/1.svg";
import web2 from "/static/projects/webbooking/2.svg";
import web3 from "/static/projects/webbooking/3.svg";
import web4 from "/static/projects/webbooking/4.svg";
import web5 from "/static/projects/webbooking/5.svg";
import bookshelf1 from "/static/projects/bookshelf/bookshelf1.svg";
import bookshelf2 from "/static/projects/bookshelf/bookshelf2.svg";
import bookshelf3 from "/static/projects/bookshelf/bookshelf3.svg";
import html from "/static/icons/html.svg";
import css from "/static/icons/css.svg";
import js from "/static/icons/js.svg";
import tailwind from "/static/icons/tailwind.svg";
import ai from "/static/icons/ai.svg";
import blender from "/static/icons/blender.svg";
import bootstrap from "/static/icons/bootsrap.svg";
import dart from "/static/icons/dart.svg";
import flutter from "/static/icons/flutter.svg";
import git from "/static/icons/git.svg";
import mysql from "/static/icons/mysql.svg";
import php from "/static/icons/php.svg";
import vscode from "/static/icons/vscode.svg";
import github from "/static/icons/github.svg";
import laravel from "/static/icons/laravel.svg";
import expressjs from "/static/icons/expressjs.svg";
import mongodb from "/static/icons/mongodb.svg";
import nodejs from "/static/icons/nodejs.svg";
import figma from "/static/icons/figma.svg";
import python from "/static/icons/python.svg";
import reactjs from "/static/icons/reactjs.svg";
import firebase from "/static/icons/firebase.svg";

export const NavbarList = [
  {
    name: "Home",
    link: "/",
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
    link: "https://github.com/UkiMahfuda",
    icon: <FaGithub size={23} />,
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/ukimahfuda",
    icon: <FaLinkedinIn size={23} />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/uki.mhfda",
    icon: <FaInstagram size={23} />,
  },
  {
    name: "Email",
    link: "mailto:ukimahfuda@gmail.com",
    icon: <MdEmail size={23} />,
  },
];

export const ProjectList = [
  {
    name: "Sistem Peminjaman Ruangan Berbasis Web.",
    slug: "sistem_peminjaman_ruangan_berbasis_web",
    desc: `
      This website was designed and developed as a final assignment in a Web Programming course. 
      The project aimed to demonstrate proficiency in both front-end and back-end development, 
      showcasing a comprehensive understanding of web technologies.


      
      In building this web application, Laravel 9 was utilized as the primary framework due to its robust features 
      and ease of use for rapid development. MySql was chosen as the database management system for its reliability 
      and performance in handling complex queries and large datasets.

      The website incorporates responsive design principles to ensure accessibility across various devices, 
      and includes features such as user authentication, dynamic content management, and interactive user interfaces. 
      This project represents a culmination of the skills and knowledge acquired throughout the course, emphasizing best practices 
      in coding, database management, and user experience design.
    `.trim(),
    link: "",
    repo: "",
    image: webbooking,
    imageProject: [web1, web2, web3, web4, web5],
    tech: [laravel, js, bootstrap, mysql],
  },
  {
    name: "Sistem Peminjaman Ruangan Berbasis Mobile.",
    slug: "sistem_peminjaman_ruangan_berbasis_mobile",
    desc: `
      This website was designed and developed as a final assignment in a Mobile Programming course. 
      The app was developed using Firebase to manage the database, ensuring seamless data integration 
      and real-time updates. Firebase was chosen for its robust capabilities, including authentication, 
      cloud storage, and hosting, making it an ideal solution for mobile applications.

      The project highlights key aspects of mobile development, such as responsive design, user-friendly interfaces, 
      and efficient data handling. This assignment showcases the practical application of skills learned during the course, 
      emphasizing the importance of integrating modern technologies to create efficient and effective mobile applications.
    `.trim(),
    link: "",
    repo: "",
    image: mobilebooking,
    imageProject: [web1, web2, web3, web4, web5],
    tech: [dart, flutter, firebase],
  },
  {
    name: "Bookshelf Apps.",
    slug: "bookshelf_apps",
    desc: `
      This app is a final course project designed to create a front-end web application for beginners. 
      In this app, users can add and delete books, providing a simple yet effective way to manage a book collection.

      The development focuses on using DOM manipulation to dynamically organize content and local storage to persist data. 
      These techniques allow for an interactive user experience and demonstrate fundamental web development skills.

      This project serves as an introduction to essential concepts in front-end development, 
      highlighting the practical application of JavaScript for creating dynamic and responsive web applications.
    `.trim(),
    link: "",
    repo: "",
    image: bookshelf,
    imageProject: [bookshelf1, bookshelf2, bookshelf3],
    tech: [js, tailwind],
  },
];

export const TechStack = [
  {
    name: "HTML",
    image: html,
    level: "Advanced",
    delay: 0,
  },
  {
    name: "CSS",
    image: css,
    level: "Advanced",
    delay: 50,
  },
  {
    name: "Bootstrap",
    image: bootstrap,
    level: "Advanced",
    delay: 100,
  },
  {
    name: "Tailwind",
    image: tailwind,
    level: "Advanced",
    delay: 150,
  },
  {
    name: "JavaScript",
    image: js,
    level: "Intermediate",
    delay: 200,
  },
  {
    name: "PHP",
    image: php,
    level: "Intermediate",
    delay: 250,
  },
  {
    name: "Dart",
    image: dart,
    level: "Beginner",
    delay: 300,
  },
  {
    name: "Python",
    image: python,
    level: "Beginner",
    delay: 350,
  },
  {
    name: "Laravel",
    image: laravel,
    level: "Intermediate",
    delay: 400,
  },
  {
    name: "Express Js",
    image: expressjs,
    level: "Beginner",
    delay: 450,
  },
  {
    name: "React Js",
    image: reactjs,
    level: "Intermediate",
    delay: 500,
  },
  {
    name: "Flutter",
    image: flutter,
    level: "Intermediate",
    delay: 550,
  },
  {
    name: "Node Js",
    image: nodejs,
    level: "Beginner",
    delay: 600,
  },
  {
    name: "My Sql",
    image: mysql,
    level: "Advanced",
    delay: 650,
  },
  {
    name: "Mongo DB",
    image: mongodb,
    level: "Beginner",
    delay: 700,
  },
];

export const Tools = [
  {
    name: "Visual Studio Code",
    image: vscode,
    option: "Code Editor",
    delay: 0,
  },
  {
    name: "Blender",
    image: blender,
    option: "3D Modeling",
    delay: 150,
  },
  {
    name: "Adobe Illustrator",
    image: ai,
    option: "Graphic Design",
    delay: 200,
  },
  {
    name: "Figma",
    image: figma,
    option: "UI Design",
    delay: 250,
  },
  {
    name: "Git",
    image: git,
    option: "Version Control",
    delay: 50,
  },
  {
    name: "Github",
    image: github,
    option: "Version Control",
    delay: 100,
  },
];
