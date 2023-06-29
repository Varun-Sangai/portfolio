import {
    starbucks,
    weather,
    ecommerce
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
      title: "C++"
    },
    {
      title: "Java"
    },
    {
      title: "Python"
    },
    {
      title: "Go"
    },
    {
      title: "HTML,CSS"
    },
    {
      title: "Javascript"
    },
    {
      title: "React"
    },
    {
      title: "Node.js"
    },
    {
      title: "Express"
    },
    {
      title: "MongoDB"
    },
    {
      title: "Typescript"
    },
    {
      title:"MySQL"
    }
  ];
  
  
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Aquaria Core",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Developing and maintaining Full stack web applications.",
        "Implementing responsive design and making APIs",
        "Right Now working on Edmertion ,handling both backend ( Node , Express , PostgressSQL ) and frontend ( React.js ) myself."
      ],
    }
  ];
 
  const projects = [
    {
      name: "Weather",
      description:
        "Web-based platform that allows users to check weather of Cities.Using openweather Map API.",
      image: weather,
      source_code_link: "https://github.com/Varun-Sangai/weather",
      status:{
        name:"Published",
        color:"blue-text-gradient"
      },
      link:"https://varun-sangai.github.io/weather/"
    },
    {
      name: "E-commerce",
      description:
        "Web application that enables users to order the items they looking for and admin to add new items,delete items etc.",
      image:ecommerce,
      source_code_link: "https://github.com/Varun-Sangai/e-commerce",
      status:{
        name:"On Going",
        color:"green-text-gradient"
      },
      link:""
    }
  ];
  
  export { services,  experiences,  projects };