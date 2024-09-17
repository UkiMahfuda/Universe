import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import img_plagiarism from "/static/projects/plagiarism/plagiarism.png";
import img_mobilepinjam from "/static/projects/mobilebooking/mobilebooking.svg";
import img_webpinjam from "/static/projects/webbooking/webbooking.svg";
import img_porto from "/static/projects/portfolio/porto.png";
import img_bookshelf from "/static/projects/bookshelf/bookshelf.svg";

import vid_plagiarism from "/static/projects/plagiarism/vid_plagiarism.mp4";
import vid_mobilepinjam from "/static/projects/mobilebooking/vid_mob.mp4";
import vid_webpinjam from "/static/projects/webbooking/vid_pinjamruang.mp4";
import vid_porto from "/static/projects/portfolio/vid-porto.mp4";
import vid_bookshelf from "/static/projects/bookshelf/vid_bookshelf.mp4";

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
import googleidx from "/static/icons/googleidx.svg";
import postman from "/static/icons/postman.svg";

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
    name: "Project IDX",
    image: googleidx,
    option: "Code Editor",
    delay: 50,
  },
  {
    name: "Postman",
    image: postman,
    option: "API Testing",
    delay: 100,
  },
  {
    name: "Adobe Illustrator",
    image: ai,
    option: "Graphic Design",
    delay: 150,
  },
  {
    name: "Figma",
    image: figma,
    option: "UI Design",
    delay: 200,
  },
  {
    name: "Blender",
    image: blender,
    option: "3D Modeling",
    delay: 250,
  },
  {
    name: "Github",
    image: github,
    option: "Version Control",
    delay: 300,
  },
  {
    name: "Git",
    image: git,
    option: "Version Control",
    delay: 350,
  },
];

export const ProjectList = [
  {
    name: "Plagiarism PDF Checker",
    slug: "plagiarism_pdf_checker",
    desc: `
      Plagiarism PDF Checker is a web application that allows users to upload PDF files and check for plagiarism. 
      The application uses Python, Flask, and PyPDF2 libraries to perform the necessary tasks. 
      The application provides a user-friendly interface that allows users to upload and check PDF files. 
      The application also provides a report with the percentage of similarity between the uploaded files.
    `.trim(),
    link: "",
    repo: "https://github.com/UkiMahfuda/Plagiarism-OCR",
    image: img_plagiarism,
    video: vid_plagiarism,
    tech: [python, js, tailwind],
  },
  {
    name: "Sistem Peminjaman Ruangan Berbasis Mobile.",
    slug: "sistem_peminjaman_ruangan_berbasis_mobile",
    desc: `
      This apps was designed and developed as a final assignment in a Mobile Programming course. 
      The app was developed using Firebase to manage the database, ensuring seamless data integration 
      and real-time updates. Firebase was chosen for its robust capabilities, including authentication, 
      cloud storage, and hosting, making it an ideal solution for mobile applications.

      The project highlights key aspects of mobile development, such as responsive design, user-friendly interfaces, 
      and efficient data handling. This assignment showcases the practical application of skills learned during the course, 
      emphasizing the importance of integrating modern technologies to create efficient and effective mobile applications.
    `.trim(),
    link: "",
    repo: "https://github.com/UkiMahfuda/mobile_pinjam_ruang",
    image: img_mobilepinjam,
    video: vid_mobilepinjam,
    tech: [dart, flutter, firebase],
  },
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
    repo: "https://github.com/UkiMahfuda/web-pinjam-ruang",
    image: img_webpinjam,
    video: vid_webpinjam,
    tech: [laravel, js, bootstrap, mysql],
  },
  {
    name: "Web Portfolio",
    slug: "web_portfolio",
    desc: `
    Over the past month and a half, I developed a web portfolio using ReactJS and Tailwind CSS. This portfolio showcases my work with a responsive and aesthetic interface. ReactJS provides dynamism, while Tailwind CSS offers a modern style, resulting in a smooth and engaging user experience.

    The portfolio includes sections for home, about me, project portfolio, and contact. The home page features a brief summary of myself and my skills. The project portfolio section displays projects with descriptions and links. The contact page provides an intuitive form for reaching out to me.
    `.trim(),
    link: "",
    repo: "",
    image: img_porto,
    video: vid_porto,
    tech: [reactjs, tailwind],
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
    repo: "https://github.com/UkiMahfuda/bookshelf",
    image: img_bookshelf,
    video: vid_bookshelf,
    tech: [js, tailwind],
  },
];

export const education = [
  {
    name: "Universitas Teknokrat Indonesia.",
    prodi: "Bachelor's Degree in Informatics.",
    tgl: "Sep 2021 - Present",
    desc: [
      "I enrolled in the Informatics Engineering program because I believed that commercial jobs would eventually be replaced by technology, so I decided to dive into this field.",
      "In fourth semester, I realized that coding was my main goal in pursuing this major. So, I started learning programming and quickly fell in love with it.",
      "I explored different programming languages and the latest technologies by attending workshops, and online courses. These experiences boosted my technical skills and broadened my understanding of tech applications.",
      "I also got involved in team projects and programming competitions, which taught me the importance of teamwork and effective communication.",
    ],
  },
];

export const award = [
  {
    name: "2nd Place Web Programming Competition.",
    tempat: "Universitas Teknokrat Indonesia.",
    tgl: "Jan 2024",
    link: "https://drive.google.com/file/d/1RyH9W_uldYg1JWTiNgzgZ7e3ATuUDV49/view?usp=drive_link",
    desc: [
      "I secured the Second Place in a Web Programming Competition, demonstrating my expertise in building robust web applications using a comprehensive tech stack that includes Laravel, MySQL, and JavaScript.",
      "This achievement highlights my ability to deliver high-quality, efficient, and scalable solutions in a competitive environment.",
    ],
  },
];
export const certification = [
  {
    course: "Dicoding Indonesia.",
    desc: [
      {
        name: "Cloud Practitioner Essentials (AWS Cloud).",
        link: "https://www.dicoding.com/certificates/1OP8NG4WQXQK",
      },
      {
        name: "Learn JavaScript Programming Basics.",
        link: "https://www.dicoding.com/certificates/53XEY9KOVPRN",
      },
      {
        name: "Learn to Create a Web Front-End for Beginners.",
        link: "https://www.dicoding.com/certificates/2VX3OKDWQZYQ",
      },
      {
        name: "Learn Web Programming Basics.",
        link: "https://www.dicoding.com/certificates/JLX1291Y2Z72",
      },
      {
        name: "Getting Started with Programming Basics to Become a Software Developer.",
        link: "https://www.dicoding.com/certificates/EYX4YV2O6ZDL",
      },
      {
        name: "Learn Git Basics with GitHub.",
        link: "https://www.dicoding.com/certificates/98XWVRE6JPM3",
      },
      {
        name: "Learn Basic Structured Query Language (SQL).",
        link: "https://www.dicoding.com/certificates/QLZ9R856MP5D",
      },
    ],
  },
  {
    course: "Udemy.",
    desc: [
      {
        name: "Webservices API Testing with Postman - Complete Guide.",
        link: "https://www.udemy.com/certificate/UC-a88a383e-09b3-4c9c-a90b-08dd88b83117/",
      },
    ],
  },
  {
    course: "Digitalent (Vocational School Graduate Academy).",
    desc: [
      {
        name: "Junior Web Developer.",
        link: "https://drive.google.com/file/d/1CHQZMwdT4ypa25NjVewQqzgwHpeyAcRc/view",
      },
    ],
  },
  {
    course: "Universitas Teknokrat Indonesia.",
    desc: [
      {
        name: "Basic Artificial Intelligence.",
        link: "https://drive.google.com/file/d/1_0Xq3Ex_VxhdgkZ5i8NPoWDQ8HLbfpec/view?usp=drive_link",
      },
    ],
  },
];
