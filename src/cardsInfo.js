import brew from './cardImages/brewery.jpg';
import room from './cardImages/room-planner.png';
import password from './cardImages/password-gen.jpg';
import quiz from './cardImages/quiz.jpg';
import ecommerce from './cardImages/ecommerce.jpg';
import tracker from './cardImages/employeetracker.jpg';

const cardsInfo = [
  {
    id: 1,
    title: "Brewhaha",
    description:
      "OpenBrewery & Wikipedia APIs",
    image: brew,
    imageRatio: 784 / 1016
  },
  {
    id: 2,
    title: "LEaseGIT",
    description:
      "Sequelize, Express, Matter",
    image: room,
    imageRatio: 839 / 1133
  },
  {
    id: 3,
    title: "Password Generator",
    description:
      "Generates passwords from user prompts",
    image: password,
    imageRatio: 784 / 1016
  },
  {
    id: 4,
    title: "E-Commerce",
    description:
      "Sequelize, Express",
    image: ecommerce,
    imageRatio: 784 / 1016
  },
  {
    id: 5,
    title: "Employee Tracker",
    description:
      "",
    image: tracker,
    imageRatio: 784 / 1016
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description:
      "OpenWeather API",
    image: tracker,
    imageRatio: 784 / 1016
  }
];

export default cardsInfo;
