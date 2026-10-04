import {
  mobile,
  backend,
  creator,
  web,
  planets,
  angular,
  csharp,
  html,
  css,
  net,
  netcore,
  photoshop,
  premierepro,
  python,
  sql,
  reactjs,
  git,
  docker,
  zenco,
  inapp,
  uol,
  cdac,
  lstm,
  profile,
  multi
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
    title: "Full Stack .NET Developer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: ".NET",
    icon: net,
  },
  {
    name: ".NET Core",
    icon: netcore,
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
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere Pro",
    icon: premierepro,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Zenco Legal",
    icon: zenco,
    iconBg: "#FFFFFF",
    date: "Jul 2024 - Present",
    points: [
      "Full stack developer at a legal services firm, actively delivering multiple high-impact projects using Blazor, .NET Core, and Azure services, resulting in a 30% improvement in operational efficiency and scalability.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "InApp",
    icon: inapp,
    iconBg: "#FFFFFF",
    date: "Jul 2019 - Jul 2022",
    points: [
      "Led full-stack development for a talent-empowering mobile application built on Microservices with .NET Core, Xamarin and Azure services which was a first in the organization",
      "Worked on the entire software development life cycle including designing project architecture, migrating from monolithic to microservice architecture, and improving security measures, resulting in a 35% increase in application scalability and performance",
      "Played a key role in creating custom 3D renders using Adobe applications besides working as a full stack .NET and Angular JS developer for a first-in-class outdoor living space builder's web application",
      "Designed and developed unique UI designs using Angular, HTML and CSS which was highly appreciated by the client",
      "Core developer for a global helpdesk application built on .NET and EXT JS used by leading law firms",
      "Worked extensively on developing a Lucene search engine which highly increased the efficiency of the application"
    ],
  },
  {
    title: "Engineering Intern",
    company_name: "Centre for Development of Advanced Computing (CDAC)",
    icon: cdac,
    iconBg: "#FFFFFF",
    date: "Mar 2018 - May 2018",
    points: [
      "Designed and developed ongoing embedded system projects with Raspberry Pi, AVR microcontrollers, and Arduino",
    ],
  },
  {
    title: "Liverpool Student Advocate",
    company_name: "University of Liverpool",
    icon: uol,
    iconBg: "#FFFFFF",
    date: "Dec 2022 - Present",
    points: [
      "Providing support during campus visit days, undertaking campus tours and delivering talks in regional schools"
    ],
  },
  {
    title: "International Student Ambassador",
    company_name: "University of Liverpool International Team",
    icon: uol,
    iconBg: "#FFFFFF",
    date: "Dec 2022 - Present",
    points: [
      "Creating and managing the social media content for the University International Team and providing international students with support",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "Kevin has consistently demonstrated exceptional skills and dedication as a developer. His commitment to excellence and involvement in various initiatives made them an invaluable asset to our team.",
//     name: "Vijay Kumar",
//     designation: "CEO",
//     company: "InApp",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "Kevin's contributions extended beyond technical excellence; He actively engaged in all aspects of our organization, including extracurricular activities.",
//     name: "Biju Kumar",
//     designation: "HR",
//     company: "InApp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "The kind of content that Kevin creates is unique and always the best out there. He's just amazing at anything he does!",
//     name: "Jay Louise",
//     designation: "International Team Head",
//     company: "University of Liverpool",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Content Creation Engine using LSTM",
    description:
      "This is a project I undertook as a part of my dissertation. It is a web application designed to facilitate content creation and validation with the help of a LSTM model",
    tags: [
      {
        name: "lstm",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: lstm,
    source_code_link: "https://github.com/kevinmathew247/LSTM-Content-Creation-Engine",
  },
  {
    name: "Classification of celestial bodies using CNN",
    description:
      "Web application developed using CNN and Flask which classifies any celestial body present in an image. This project aims to automate and enhance the analysis of astronomical data",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "imageclassification",
        color: "pink-text-gradient",
      },
    ],
    image: planets,
    source_code_link: "https://github.com/kevinmathew247/CNN-Image-Detection-For-Celestial-Bodies",
  },
  {
    name: "Multi-Armed Bandits",
    description:
      "Implementation of various multi-armed bandits algorithms using Python",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "reinforcementlearning",
        color: "green-text-gradient",
      },
    ],
    image: multi,
    source_code_link: "https://github.com/kevinmathew247/Multi-Armed-Bandit/tree/main/Multi_Armed_Bandit",
  },
];

const creativeprojects = [
  {
    name: "Instagram",
    description:"Check out my Instagram profile to view my creative works and reels",
    tags: [
      {
        name: "contentcreation",
        color: "blue-text-gradient",
      },
      {
        name: "mycreativeside",
        color: "green-text-gradient",
      },
    ],
    image: profile,
    source_code_link: "https://www.instagram.com/_kevin_mathew_/reels/?next=%2F",
  },
];

//export { services, technologies, experiences, testimonials, projects };
export { services, technologies, experiences, projects, creativeprojects };
