import bttfsvg from "../media/bttf.svg";
import dice from "../media/dice.svg";
import movieApp from "../media/movieApp.svg";
import checklists from "../media/checklists.svg";

const portfolioData = [
  {
    id: 0,
    name: "Movie App",
    languages: ["all", "javascript", "react", "css"],
    languagesIcons: ["fab fa-js-square", "fab fa-react", "fab fa-css3-alt"],
    source: "https://github.com/Atalaa/The-Shoppies",
    demo: "https://atalaa.github.io/The-Shoppies/",
    picture: movieApp,
  },
  {
    id: 1,
    name: "To-do list",
    languages: ["all", "javascript", "react", "sass"],
    languagesIcons: ["fab fa-js-square", "fab fa-react", "fab fa-sass"],
    source: "https://github.com/Atalaa/to-do-list",
    demo: "https://atalaa.github.io/to-do-list/",
    picture: checklists,
  },
  {
    id: 2,
    name: "Back to the Future",
    languages: ["all", "javascript", "react", "sass"],
    languagesIcons: ["fab fa-js-square", "fab fa-react", "fab fa-sass"],
    source: "https://github.com/Atalaa/React-Back-to-the-Future",
    demo: "https://atalaa.github.io/React-Back-to-the-Future/",
    picture: bttfsvg,
  },
  {
    id: 3,
    name: "Pig Dice Game",
    languages: ["all", "javascript", "css"],
    languagesIcons: ["fab fa-js-square", "fab fa-css3-alt"],
    source: "https://github.com/Atalaa/Pig-Dice-Game",
    demo: "https://atalaa.github.io/Pig-Dice-Game/",
    picture: dice,
  },
  // {
  //   id: 4,
  //   name: "Shopify iOS App",
  //   languages: ["all", "swift"],
  //   languagesIcons: ["fab fa-swift"],
  //   source: "https://github.com/Atalaa/Shopify-Challenge-Summer-2019",
  //   picture: shopify,
  // },
  // {
  //   id: 5,
  //   name: "Emojionary",
  //   languages: ["all", "javascript", "react", "css"],
  //   languagesIcons: ["fab fa-js-square", "fab fa-react", "fab fa-css3-alt"],
  //   source: "https://github.com/Atalaa/Emojionary",
  //   demo: "https://atalaa.github.io/Emojionary/",
  //   picture: emoji,
  // },
];

export default portfolioData;
