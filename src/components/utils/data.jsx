import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import webbooking from "/static/projects/webbooking.svg";
import mobilebooking from "/static/projects/mobilebooking.svg";
import bookshelf from "/static/projects/bookshelf.svg";
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
    link: "/home89",
  },
  {
    name: "About",
    link: "/about89",
  },
  {
    name: "Project",
    link: "/project89",
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
    slug: "sistem_peminjaman_ruangan_berbasis_web",
    name: "Sistem Peminjaman Ruangan Berbasis Web.",
    image: webbooking,
    desc: "This website was designed and developed as a final assignment in a Web Programming course. In build this web uses Laravel 9 and MySql as database",
    tech: [laravel, js, bootstrap, mysql],
  },
  {
    slug: "sistem_peminjaman_ruangan_berbasis_mobile",
    name: "Sistem Peminjaman Ruangan Berbasis Mobile.",
    image: mobilebooking,
    desc: "This website was designed and developed as a final assignment in a Mobile Programming course. This apps develop uses Firebase to manage the database so that data can be easily integrated",
    tech: [dart, flutter, firebase],
  },
  {
    slug: "bookshelf_apps",
    name: "Bookshelf Apps.",
    image: bookshelf,
    desc: "This Apps is final course create frontend web for beginner. On this apps you can add book and delete book. In build it use DOM manipulation to organize and local storage for data",
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
