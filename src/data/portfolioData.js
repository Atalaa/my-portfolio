import bttfsvg from "../media/bttf.svg";
import dice from "../media/dice.svg";
import movieApp from "../media/movieApp.svg";
import checklists from "../media/checklists.svg";
import rockPaperScissors from "../media/rock-paper-scissors.png";
import authFirebase from "../media/auth-firebase.png";


const portfolioData = [
  {
    id: 0,
    name: "Authentication Firebase",
    languages: ["all", "react", "firebase", "html5/css"],
    languagesIcons: ["fas fa-database", "fab fa-react", "fab fa-html5", "fab fa-css3-alt"],
    source: "https://github.com/Atalaa/auth-firebase",
    demo: "https://auth-firebase-atalaa.vercel.app/",
    picture: authFirebase,
  },
  {
    id: 1,
    name: "Back to the Future",
    languages: ["all", "react", "sass", "html5/css"],
    languagesIcons: ["fab fa-react", "fab fa-html5", "fab fa-css3-alt", "fab fa-sass"],
    source: "https://github.com/Atalaa/React-Back-to-the-Future",
    demo: "https://atalaa.github.io/React-Back-to-the-Future/",
    picture: bttfsvg,
  },
  {
    id: 2,
    name: "Rock Paper Scissors",
    languages: ["all", "react", "html5/css"],
    languagesIcons: ["fab fa-react", "fab fa-html5", "fab fa-css3-alt"],
    source: "https://github.com/Atalaa/React-rock-paper-scissors",
    demo: "https://rock-paper-scissors-atalaa.vercel.app/",
    picture: rockPaperScissors,
  },
  {
    id: 3,
    name: "Movie App",
    languages: ["all", "react", "html5/css"],
    languagesIcons: ["fab fa-react", "fab fa-html5", "fab fa-css3-alt"],
    source: "https://github.com/Atalaa/The-Shoppies",
    demo: "https://atalaa.github.io/The-Shoppies/",
    picture: movieApp,
  },
  {
    id: 4,
    name: "To-do list",
    languages: ["all", "react", "sass", "html5/css"],
    languagesIcons: ["fab fa-react", "fab fa-html5", "fab fa-css3-alt", "fab fa-sass"],
    source: "https://github.com/Atalaa/to-do-list",
    demo: "https://atalaa.github.io/to-do-list/",
    picture: checklists,
  },
  {
    id: 5,
    name: "Pig Dice Game",
    languages: ["all", "javascript", "html5/css"],
    languagesIcons: ["fab fa-js-square", "fab fa-html5", "fab fa-css3-alt"],
    source: "https://github.com/Atalaa/Pig-Dice-Game",
    demo: "https://atalaa.github.io/Pig-Dice-Game/",
    picture: dice,
  }
];

export default portfolioData;
