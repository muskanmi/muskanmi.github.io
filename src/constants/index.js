import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  w3villa,
  w,
  g,
  s,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pig,
  python,
  sql,
  newgit,
  ml,
  mysql,
  bankist,
  netflix,
  url,
  gender,
  machine,
  learn,
  mlearn,
  javalogo,
  Flappygame,
  udemy,
  coursera,
  javascriptCourse,
  dsa,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Data Science Enthusiast",
    icon: backend,
  },
  {
    title: "Engineering Graduate",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: javalogo,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: newgit,
  },
  {
    name: "ML (Begineer)",
    icon: mlearn,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "W3villa Technologies",
    icon: w,
    iconBg: "#383E56",
    date: "February 2022 - January 2023",
    points: [
      "Developed an Edtech platform from scratch which helps students and professionals in learning & enhancing their skills and abilities.",
      "Implemented and Integrated features like Blog Service, Admin Panel, Courses, Announecements, and many more.",
      "Participated in Code Reviews and providing support to other developers.",
    ],
  },
];

const educations = [
  {
    title: "",
    company_name: "GLA University",
    icon: g,
    iconBg: "#383E56",
    date: "September 2018 - May 2022",
    points: [
      "B.TECH (Computer Science & Engineering)"
    ],
  },
  {
    title: "",
    company_name: "S.J.S Public School",
    icon: s,
    iconBg: "#383E56",
    date: "March 2016- August 2018",
    points: [
      "Higher Secondary School"
    ],
  },
  {
    title: "",
    company_name: "St. Joseph's School",
    icon: s,
    iconBg: "#383E56",
    date: "March 2014 - March 2016",
    points: [
      "High School"
    ],
  },
];

const testimonials = [
  {
    name: "Javascript",
    designation: "Issued",
    company: "Udemy",
    image: udemy,
    url: "https://udemy.com",
    course: javascriptCourse,
  },
  {
    name: "Data Structures & Algorithms",
    designation: "Issued",
    company: "Udemy",
    image: udemy,
    url: "https://udemy.com",
    course: dsa,
  },
  {
    name: "Development with NodeJS, Express and MongoDB",
    designation: "Issued",
    company: "Coursera",
    image: coursera,
    url: "https://coursera.org",
    course: javascriptCourse,
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "A Netflix Clone App built using React js , Material UI & TMDB API that allows searching of 1000+ movies and provides information about their plot, IMDB rating, Genre.",
    tags: [
      {
        name: "React.js",
        color: "#006359",
      },
      {
        name: "Node.js",
        color: "#ccb291",
      },
      {
        name: "MongoDB",
        color: "#ccaebc",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/muskanmi/netflix-clone-frontend",
  },
  {
    name: "Age Gender Classification",
    description:
      "To build a gender and age detector that can approximately guess the gender and age of the person (face) in a picture using deep learning.",
    tags: [
      {
        name: "Flask",
        color: "green",
      },
      {
        name: "Python",
        color: "#aeae4b",
      },
      {
        name: "CNN",
        color: "#e36722",
      },
    ],
    image: gender,
    source_code_link: "https://github.com/muskanmi/Age-and-Gender-Prediction",
  },
  {
    name: "URL Shortener",
    description:
      "An URL shortener is a website that reduces the length of your URL. The idea is to minimize the web page address into something that's easier to remember and track.",
    tags: [
      {
        name: "Node.js",
        color: "#ccb291",
      },
      {
        name: "Express.js",
        color: "#2398a4",
      },
      {
        name: "MongoDB",
        color: "#ccaebc",
      },
    ],
    image: url,
    source_code_link: "https://github.com/muskanmi/URL-Shortener",
  },
  {
    name: "Pig Game",
    description:
      "Pig is a simple dice game. Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn.",
    tags: [
      {
        name: "JavaScript",
        color: "#5c1dcc",
      },
      {
        name: "HTML",
        color: "#8b7975",
      },
      {
        name: "CSS",
        color: "#114d56",
      },
    ],
    image: pig,
    source_code_link: "https://github.com/muskanmi/Pig-Game",
  },
  {
    name: "Flappy Bird Game",
    description:
      "Flappy Bird is a game where you tap the screen to make the bird fly. It is a game in which the player controls the bird Faby, which moves persistently to the right",
    tags: [
      {
        name: "JavaScript",
        color: "#5c1dcc",
      },
      {
        name: "HTML",
        color: "#8b7975",
      },
      {
        name: "CSS",
        color: "#114d56",
      },
    ],
    image: Flappygame,
    source_code_link: "https://github.com/muskanmi/Flappy-Bird-Game",
  },
  {
    name: "Bankist App",
    description:
      "Bankist WebApp is a miniature clone of a bank which implements primary tasks such as Transfer money, Request for a loan, Close an account, Check current balance.",
    tags: [
      {
        name: "JavaScript",
        color: "#5c1dcc",
      },
      {
        name: "HTML",
        color: "#8b7975",
      },
      {
        name: "CSS",
        color: "#114d56",
      },
    ],
    image: bankist,
    source_code_link: "https://github.com/muskanmi/Bankist-app",
  },
  
];

export { services, technologies, experiences, testimonials, projects, educations };
