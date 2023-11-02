import Calculator from "../assets/calculator.png";
import Filmler from "../assets/filmlist.jpg";
import TaskYonetimi from "../assets/taskyonetimi.png";

export const projectsDataEng = () => {
  return [
    {
      id: 1,
      img: Calculator,
      title: "Calculator project",
      description:
        "It is a calculator application that can add, multiply, subtract and subtract numbers in any order, as well as add memory saving and callback features.",
      methodsofproject: ["node.js", "react"],
      githubLink: "https://github.com/Sdurak/fsweb-s10g1-reducer-calculator",
      deployLink: "https://calculator-hesaplama.netlify.app/",
    },
    {
      id: 2,
      img: Filmler,
      title: "Films",
      description:
        "A web application containing a small movie database. It is an application where you can add and buy movies or stop buying them. Payment by card is available.",
      methodsofproject: ["react", "redux", "tailwindcss"],
      githubLink: "https://github.com/Sdurak/fsweb-s10g3-redux-watchlist",
      deployLink: "https://filmslists.netlify.app/",
    },
    {
      id: 3,
      img: TaskYonetimi,
      title: "Task Management",
      description:
        "Task tracking systems are projects where we divide the things that need to be done in a project into small tasks and add the people who need to do these tasks.",
      methodsofproject: ["react", "redux", "yup", "react toastify"],
      githubLink: "https://github.com/Sdurak/fsweb-s9g1-task-yonetimi",
      deployLink: "https://task-yonetimi.netlify.app/",
    },
  ];
};
